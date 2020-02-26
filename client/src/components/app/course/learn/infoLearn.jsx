import React from "react";
import { List } from 'antd';

class InfoLearn extends React.Component {
  render() {
    return (
        <div style={{ position: "relative" }}>
        <div
          className="infoBox"
          style={{
            marginLeft: "30px",
            position: "absolute",
            top: "-120px",
            background: "#fff",
            borderRadius: "5px"
          }}
        >
          <List
            bordered
          >
            <List.Item >
              <div className="infoBox-item">
                <p>Join</p>
                <h1>1,283,021</h1>
                <p>people who have taken this course</p>
              </div>
            </List.Item>
            <List.Item >
              <div className="infoBox-item">
                <p>Time to Complete</p>
                <h1>1 Hour</h1>
              </div>
            </List.Item>
            <List.Item >
              <div className="infoBox-item">
                <p>Prerequisites</p>
                <h1>None</h1>
              </div>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}
export default InfoLearn;
