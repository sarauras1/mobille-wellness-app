import React, { Component } from "react";
import axios from "axios";
import "./App.css";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      review: "",
      stars: "",
    };
  }
  makePostRequest() {
    return axios({
      method: "POST",
      url:
        "https://mybusiness.googleapis.com/v3/accounts/{process.env.ACCOUNT_ID}/locations/{process.env.LOCATION_ID}/reviews/",
      data: {
        name: "",
        review: "",
        stars: "",
      },
    }).then((response) => response.data.json);
  }
  async componentDidMount() {
    try {
      let postResult = await this.makePostRequest();
    
      this.setState({
        name: postResult.name,
        review: postResult.review,
        stars: postResult.stars,
      });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    const { name, review, stars } = this.state;
    return (
      <div className="App">
        <h2>{name}</h2>
        <h2>{review}</h2>
        <h2>{stars}</h2>
        {process.env.NODE_ENV === "development"
          ? process.env.accountid
          : process.env.locationid}
      </div>
    );
  }
}

export default App;
