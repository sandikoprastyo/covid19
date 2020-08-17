import React, { Component } from "react";
import { Chart, Cards, Country } from "./Components";
import { fetchData } from "./api";
import logo from "../src/assets/img/logo.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleClickCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <Cards data={data} />
        <Country handleClickCountry={this.handleClickCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
