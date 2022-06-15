import React from "react";
import { Typography, Card, Popover, List } from "antd";
import {
  PhoneOutlined,
  InfoCircleOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Text, Link } = Typography;

interface CardContainerProps {
  name: string;
  area: string;
  services: string[];
  hours: string[];
  contact: string;
  address: string;
  website: string;
  imgUrl: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  imgUrl,
  name,
  area,
  services,
  hours,
  contact,
  address,
  website,
}) => {
  const RenderServices = () => {
    return (
      <div>
        <List
          dataSource={services}
          renderItem={(service: string) => (
            <List.Item>
              <Text style={{ fontSize: 12 }}>{service}</Text>
            </List.Item>
          )}
        />
      </div>
    );
  };

  const RenderHours = () => {
    return (
      <div>
        <List
          dataSource={hours}
          renderItem={(hour: string) => (
            <List.Item>
              <Text style={{ fontSize: 12 }}>{hour}</Text>
            </List.Item>
          )}
        />
      </div>
    );
  };

  const RenderDescription = () => {
    return (
      <div>
        <Meta description={address} style={{ marginBottom: 15 }} />
        <Meta
          description={
            <>
              <div>
                {area}
              </div>
              <div>
                <PhoneOutlined style={{ fontSize: 16 }} /> {contact}
              </div>
            </>
          }
          style={{ marginBottom: 15, fontSize: 12 }}
        />
      </div>
    );
  };

  return (
    <div style={{ marginLeft: 15, marginRight: 15, marginBottom: 15 }}>
      <Card
        hoverable
        cover={<img src={imgUrl} />}
        style={{ width: 350, background: "#ecebec" }}
        bordered
        actions={[
          <Popover content={<RenderServices />}>
            <Text style={{ color: "#989499" }}>
              Services <InfoCircleOutlined style={{ fontSize: 12 }} />
            </Text>
          </Popover>,
          <Popover content={<RenderHours />}>
            <Text style={{ color: "#989499" }}>
              Opening Hours <ClockCircleOutlined style={{ fontSize: 12 }} />
            </Text>
          </Popover>,
          <Popover>
            <Link href={website} target="_blank" style={{ color: "#1890ff" }}>
              Website <GlobalOutlined style={{ fontSize: 12 }} />
            </Link>
          </Popover>,
        ]}
      >
        <Meta title={name} description={<RenderDescription />} />
      </Card>
    </div>
  );
};

export default CardContainer;
