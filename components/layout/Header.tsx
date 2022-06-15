import React from "react";
import { Layout, Typography, Button, Row, Col } from "antd";
import * as ClinicAPI from "../../services/index";

const { Text } = Typography;

interface HeaderProps {
  title: string;
}

const handleClick = () => {
  ClinicAPI.post("seed").then(
    (res) => {
      return res;
    },
    (error) => {
      console.error(error);
    }
  );
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <Layout.Header style={{ background: "#ff7420" }}>
        <Row justify="space-between">
            <Text style={{ color: "white", fontSize: 24 }} strong>
              {title}
            </Text>
            <Text>
              <Button
                style={{
                  background: "white",
                  color: "#ff7420",
                  borderRadius: 20,
                  fontWeight: "bold",
                }}
                onClick={() => handleClick()}
              >
                Add veterinary clinics
              </Button>
            </Text>
        </Row>
      </Layout.Header>
    </div>
  );
};

export default Header;
