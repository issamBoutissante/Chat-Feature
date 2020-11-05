import React, { Component } from "react";
import Layout from "../messagingArea/Layout/Layout";
import axios from "axios";
import Spinner from "./Spinner/Spinner";
import HomeContent from "./HomeContent/HomeContent";

axios.defaults.baseURL = "https://message-137c6.firebaseio.com/";

export default class Home extends Component {
  state = {
    id: this.props.props.location.state.AccountID,
    accountInfo: "undefined",
    content: <Spinner />,
  };
  componentDidMount() {
    axios
      .get(`/accounts.json/`)
      .then((res) => {
        this.setState({
          accountInfo: res.data[this.state.id],
        });
      })
      .then((res) => {
        this.setState({
          content: <HomeContent accountInfo={{ ...this.state.accountInfo }} />,
        });
      })
      .catch((err) =>
        this.setState({
          content: <h1>"there is a problem with your connection"</h1>,
        })
      );
  }
  render() {
    return <Layout>{this.state.content}</Layout>;
  }
}
