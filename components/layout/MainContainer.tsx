import React, { useState } from "react";
import { Layout, Typography, Input, Row, Col, Select } from "antd";
import { AxiosError } from "axios";
import CardContainer from "../CardContainer";
import { useVetList } from "../../hooks/useVetList";
import { Clinic } from "../../lib/types";
import * as ClinicAPI from "../../services/index";
import { capatalize } from "../../utils/common";

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const MainContainer: React.FC = () => {
  const items = useVetList() as Clinic[];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("all");
  const [results, setResults] = useState<[]>([]);

  const handleSearch = (searchTerm: string, location: string) => {
    ClinicAPI.post("search", {
      searchTerm: searchTerm === "" ? null : searchTerm,
      location: location === "all" ? null : location,
    }).then(
      (res) => {
        setResults(res.results);
      },
      (error: AxiosError) => {
        console.error(error);
      }
    );
  };

  const RenderSearchResult = () => {
    return (
      <Row>
        {results.map((result: Clinic, index: number) => (
          <CardContainer
            key={index}
            imgUrl={result.imgUrl}
            name={result.name}
            area={result.area}
            contact={result.contact}
            address={result.address}
            services={result.services}
            hours={result.hours}
            website={result.website}
          />
        ))}
      </Row>
    );
  };

  const RenderDefaultList = () => {
    return (
      <Row>
        {items.map((item: Clinic, index: number) => (
          <CardContainer
            key={index}
            imgUrl={item.imgUrl}
            name={item.name}
            area={item.area}
            contact={item.contact}
            address={item.address}
            services={item.services}
            hours={item.hours}
            website={item.website}
          />
        ))}
      </Row>
    );
  };

  const RenderLocations = () => {
    let areas: string[] = [];
    areas.push("all");

    items.map((item: Clinic) => {
      areas.push(item.area);
    });

    const filteredAreas: string[] = Array.from(new Set(areas));

    return (
      <Select
        defaultValue={capatalize(location)}
        onSelect={(e: string) => {
          setLocation(e);
          handleSearch(searchTerm, e);
        }}
        allowClear
        bordered
        showArrow
        style={{ margin: 15, width: 200 }}
      >
        {filteredAreas.map((area: string, index: number) => (
          <Option value={area} key={index}>
            {area}
          </Option>
        ))}
      </Select>
    );
  };

  return (
    <Layout.Content>
      <Row justify="space-between">
        <Search
          style={{ margin: 15, width: "70%" }}
          placeholder="Search for listings..."
          onSearch={(e: string) => {
            handleSearch(e, location);
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
          }}
          allowClear
        />
        <RenderLocations />
      </Row>
      <Row>
        {results.length === 0 ? <RenderDefaultList /> : <RenderSearchResult />}
      </Row>
    </Layout.Content>
  );
};

export default MainContainer;
