import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inDollars: "---",
      inEuro: "---",
      inPounds: "---",
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          inDollars: data.bpi.USD.rate,
          inEuro: data.bpi.EUR.rate,
          inPounds: data.bpi.GBP.rate,
        });
      });
  }

  render() {
    const { inDollars, inEuro, inPounds } = this.state;
    return (
      <div className="App">
        <h1>Price of 1 Bitcoin</h1>
        <h2>USD: {inDollars}</h2>
        <h2>EURO: {inEuro}</h2>
        <h2>GBP: {inPounds}</h2>
      </div>
    );
  }
}

export default App;
