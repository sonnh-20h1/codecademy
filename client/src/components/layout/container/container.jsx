import React from 'react';
export function Container(props) {
  return (
    <div
      className="container"
      style={{
        width: "1400px",
        margin: "auto",
        ...props.style
      }}
    >
      {props.children}
    </div>
  )
}  