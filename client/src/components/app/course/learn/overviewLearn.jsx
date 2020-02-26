import React from "react";
import { Card } from "antd";
class OverviewLearn extends React.Component {
  render() {
    return (
      <Card
        style={{
          width: "100%",
          textAlign: "left"
        }}
        headStyle={{
          borderBottom: "none"
        }}
        bodyStyle={{
          fontSize: "20px",
          paddingTop: "70px"
        }}
        bordered={false}
        tabList={[
          {
            tab: <h1 style={{ fontSize: "2rem" }}>Overview</h1>
          }
        ]}
      >
        <div>
          <h3>Why Learn ReactJS?</h3>
          <p>
            ReactJS presents graceful solutions to some of front-end
            programming’s most persistent issues. It’s fast, scalable, flexible,
            powerful, and has a robust developer community that’s rapidly
            growing. There’s never been a better time to learn React.
          </p>
          <h3>Take-Away Skills:</h3>
          <p>
            You’ll develop a strong understanding of React’s most essential
            concepts: JSX, components, and storing information via props and
            state. You’ll be able to combine these ideas in React’s modular
            programming style.
          </p>
          <h3>Note on Prerequisites:</h3>
          <p>
            A strong foundation in JavaScript is a prerequisite for this course,
            as well as basic HTML.
          </p>
        </div>
      </Card>
    );
  }
}
export default OverviewLearn;
