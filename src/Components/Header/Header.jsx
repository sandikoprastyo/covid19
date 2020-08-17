import React, { Component } from "react";
import { Container } from "@material-ui/core";

//Class Component
class Headers extends Component {
  render() {
    return (
      <div style={styles.header}>
        <Container>
          <h1>headling</h1>
        </Container>
      </div>
    );
  }
}

export default Headers;

//eslint-disable-next-line
const styles = {
  header: {
    backgroundColor: "#ea907a",
    textAlign: "left",
    margin: 0,
    paddingRight: 50,
    left: 0,
    top: 0,
    width: "100%",
    color: "white",
    position: "fixed",
  },
  img: {
    float: "right",
  },
};
