import React from "react";
import Layout from "../messagingArea/Layout/Layout";

export default function Home({ props }) {
  return (
    <Layout>
      <h1>{props.location.state.name}</h1>
    </Layout>
  );
}
