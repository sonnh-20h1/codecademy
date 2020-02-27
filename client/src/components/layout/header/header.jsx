import React, { Component } from "react";
import { Row, Col, Layout, Icon, Button } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./logoo.svg";
import { Container } from "../container/container";
const { Header } = Layout;

function ButtonComponent(props) {
  return (
    <Button
      style={{
        color: "#fff",
        backgroundColor: "#6400e4",
        borderColor: "transparent",
        borderRadius: "0",
        lineHeight: "1.5",
        padding: "10px 21px",
        height: "auto"
      }}
    >
      Sign in
    </Button>
  );
}

class HeaderComponent extends Component {
  render() {
    return (
      <Header
        className="header"
        style={{
          background: "#fff",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
          height: "auto"
        }}
      >
        <Container>
          <Row>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <img
                        alt="Codecademy logo"
                        src={logo}
                        style={{ height: "30px" }}
                      />
                    </div>
                    <div>
                      <Link to="/courses">Catalog</Link>
                    </div>
                    <div>Pricing</div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={16}></Col>
                <Col span={8}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <Icon type="search" />
                    </div>
                    <div>Log in</div>
                    <div>
                      <ButtonComponent />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Header>
    );
  }
}
export default HeaderComponent;
