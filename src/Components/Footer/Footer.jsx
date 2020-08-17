import React, { Component } from "react";

//Class Component
class Headers extends Component {
  render() {
    return (
      <div style={Footer}>
        <h1>Footer</h1>
      </div>
    );
  }
}

export default Headers;

const Footer = {
  backgroundColor: "#ea907a",
  textAlign: "center",
  margin: 0,
  padding: 0,
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  color: "white",
};
