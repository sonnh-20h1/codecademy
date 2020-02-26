import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../layout/header/header';
import RouteComponent from './routes';

const { Content, Footer } = Layout;

class MainComponent extends Component {
  render() {
    return (
      <Layout>
        <HeaderComponent />
        <Content
          style={{
            minHeight: "700px",
            paddingTop: "10px"
          }}
        >
          <RouteComponent />
        </Content >
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}
export default MainComponent;