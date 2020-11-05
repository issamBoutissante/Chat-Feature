import React from "react";
import classes from "./HomeContent.module.css";
import Functions from "../../LogInPage/LogInFunctions/LogInFunctions";

export default class HomeContent extends React.Component {
  state = {
    friends: {},
  };
  onSearchHandler = (name) => {
    Functions.isAccountExist(name).then((value) => {
      if (value.isExist) {
      }
    });
  };
  render() {
    return (
      <secion className={classes.HomeContent}>
        <header className={classes.header}>
          <h1>{this.props.accountInfo.name}</h1>
        </header>
        <section className={classes.main}>
          <div className={classes.friendsArea}>
            <div className={classes.text}>Friends</div>
            <input type="text" className={classes.text} />
            <button>Search</button>
            <ul></ul>
          </div>
          <div className={classes.messagingArea}></div>
        </section>
      </secion>
    );
  }
}
