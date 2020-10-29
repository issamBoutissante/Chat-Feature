import React from "react";
import classes from "./HomeContent.module.css";
import Text from "../../messagingArea/Layout/MyTextInput/MyTextInput";

export default function HomeContent(props) {
  return (
    <secion className={classes.HomeContent}>
      <header className={classes.header}></header>
      <section className={classes.main}>
        <div className={classes.friendsArea}>
          <div className={classes.text}>Friends</div>
          <input type="text" className={classes.text} />
    <ul><!--here i will add all the friends that the person will have --></ul>
        </div>
        <div className={classes.messagingArea}></div>
      </section>
    </secion>
  );
}
