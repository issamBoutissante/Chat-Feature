import React from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <section className={classes.layout}>
      <main>{props.children}</main>
    </section>
  );
};

export default Layout;
