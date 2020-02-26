import React from "react";

class BannerLearn extends React.Component {
  render() {
    return (
      <div
        className="header-learn"
        style={{
          backgroundColor: "rgb(105, 99, 154)",
          color: "#fff",
          paddingTop: "6rem",
          paddingBottom: "12.25rem",
          position: "relative"
        }}
      >
        <div>
          <h1
            style={{
              color: "#fff",
              fontSize: "4em"
            }}
          >Learn How to Code</h1>
          <p
            className="header-course-description"
            style={{
              fontSize: "1.625rem",
              marginBottom: "4.375rem"
            }}
          >
            Learn key programming concepts and write your first lines of code!
          </p>
          <a
            style={{
              color: "#000",
              backgroundColor: "#ffc740",
              borderColor: "transparent",
              borderRadius: "50px",
              padding: ".75rem 6.25rem",
              fontSize: "1.25rem",
              lineHeight: "1.33333",
              fontWeight: "700"
            }}
            href="courses/learn-how-to-code/articles/what-is-programming"
          >
            START
          </a>
          <div className="headerBottomLearn"></div>
        </div>
      </div>
    )
  }
}

export default BannerLearn;