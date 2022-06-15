import type { NextPage } from "next";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Header from "../components/layout/Header";
import MainContainer from "../components/layout/MainContainer";

const Home: NextPage = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header title="Veterinary Clinic Directory" />
      <MainContainer />
    </Layout>
  );
};

export default Home;
