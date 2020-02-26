import React from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;

const SubStep = () => {
  return (
    <Steps
      className="progressDotBack"
      style={{ paddingLeft: "10px", paddingTop: "15px" }}
      progressDot
      current={1}
      direction="vertical"
    >
      <Step title="What is Programming?" />
      <Step title="Variables" />
      <Step title="Reusing Values in Variables" />
      <Step title="Changing the Value of a Variable" />
    </Steps>
  );
};

class SyllabusLearn extends React.Component {
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
            tab: <h1 style={{ fontSize: "2rem" }}>Syllabus</h1>
          }
        ]}
      >
        <div>
          <Steps current={0} direction="vertical">
            <Step title="Basic of programming I" description={<SubStep />} />
            <Step title="Basic of programming II" description={<SubStep />} />
            <Step title="Basic of programming III" description={<SubStep />} />
            <Step title="Basic of programming IV" description={<SubStep />} />
            <Step title="Basic of programming V" description={<SubStep />} />
          </Steps>
        </div>
      </Card>
    );
  }
}
export default SyllabusLearn;
