import React, { useState } from "react";
import Layout from "../messagingArea/Layout/Layout";
import axios from "axios";
import Spinner from "./Spinner/Spinner";

axios.defaults.baseURL = "https://message-137c6.firebaseio.com/";

export default function Home({ props }) {
  let id = props.location.state.Account;
  const [accountInfo, setAccountInfo] = useState({ name: null });
  let content = <Spinner />;
  axios
    .get(`/accounts.json/`)
    .then((res) => {
      setAccountInfo(res.data[id]);
      content = <h1>hello {accountInfo.name}</h1>;
    })
    .then();
  return (
    <Layout>
      <content />
    </Layout>
  );
}
