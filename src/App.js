import React from "react";
import { Layout} from 'antd';
import './App.css'
import AppHeader from "./header";
import { Content } from "antd/lib/layout/layout";
import MainBody from "./content";

const { Header } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Header>
      <AppHeader/>
    </Header>
    <Content>
      <MainBody/>
    </Content>
  </Layout>
  );
}

export default App;

