import React, { Component } from 'react';
import { Row, Col, Layout, Icon, Button, Card } from 'antd';
import { Container } from '../../layout/container/container';
const { Meta } = Card;

const CardComponent = () => {
  return (
    <Card
      hoverable
      style={{
        height: "25rem",
        position: "relative"
      }}
      cover={
        <img
          alt="example"
          src={"https://cdn.codecademy.com/assets/components/cards/path-card/5d8a2f26510e9000118ef3b8.svg"}
        />
      }
    >
      <Meta
        style={{
          textAlign: "left"
        }}
        title="Learn How to Build Websites"
        description="Learn the basics of web development to build your own website. Go from being a complete Python beginner to creating chatbots with deep learning."
      />
      <div
        style={{
          textAlign: "left",
          position: "absolute",
          bottom: "0",
          padding: "24px 0"
        }}
      >
        <Icon type="clock-circle" />
        <span>10 weeks</span>
      </div>
    </Card>
  )
}

class CourseComponent extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <div
            style={{
              textAlign: "left"
            }}>
            <h3>SKILL PATHS</h3>
            <p>Skill Paths provide a short roadmap to help you master a new job-ready skill.</p>
          </div>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
            <Col span={6}>
              <CardComponent />
            </Col>
            <Col span={6}>
              <CardComponent />
            </Col>
            <Col span={6}>
              <CardComponent />
            </Col>
            <Col span={6}>
              <CardComponent />
            </Col>

            <Col span={6}>
              <CardComponent />
            </Col>
            <Col span={6}>
              <CardComponent />
            </Col>
            <Col span={6}>
              <CardComponent />
            </Col>
            <Col span={6}>
              <CardComponent />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default CourseComponent;