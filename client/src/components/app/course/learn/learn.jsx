import React, { Component } from "react";
import { Row, Col, Layout, Icon, List, Card } from "antd";
import BannerLearn from "./bannerLearn";
import OverviewLearn from "./overviewLearn";
import SyllabusLearn from "./syllabusLearn";
import InfoLearn from "./infoLearn";

import API from "../../../../config/config";

class LearnComponent extends Component {
  async componentDidMount() {
    const posts = await API.getPosts();
    console.log(posts);
  }

  render() {
    return (
      <Layout>
        <BannerLearn />
        <Layout
          className="container"
          style={{
            zIndex: "3"
          }}
        >
          <Row>
            <Col span="18">
              <OverviewLearn />
              <SyllabusLearn />
            </Col>
            <Col span="6">
              <InfoLearn />
            </Col>
          </Row>
        </Layout>
      </Layout>
    );
  }
}

export default LearnComponent;
