import React from "react";
import classes from "./HomeContent.module.css";
import Functions from "../../LogInPage/LogInFunctions/LogInFunctions";

export default class HomeContent extends React.Component {
  state = {
    friends: {},
    nameToSearch: "",
  };
  onSearchHandler = (name) => {
    Functions.isAccountExist(name).then((value) => {
      console.log(value.isExist);
      if (value.isExist) {
        this.setState((prevState) => {
          return {
            friends: { ...prevState.friends, [name]: value.AccountID },
          };
        });
        console.log(this.state.friends);
      }
    });
  };
  onCreateNewChat = (name) => {
    //HERE I WILL CREATE NEW CHAT AND I WILL USE SOCKETS WITH IT
  };
  render() {
    return (
      <>
        <secion className={classes.HomeContent}>
          <header className={classes.header}>
            <h1>{this.props.accountInfo.name}</h1>
          </header>
          <section className={classes.main}>
            <div className={classes.friendsArea}>
              <div className={classes.text}>Friends</div>
              <input
                onChange={(e) =>
                  this.setState({ nameToSearch: e.target.value })
                }
                type="text"
                className={classes.text}
              />
              <button
                onClick={this.onSearchHandler.bind(
                  null,
                  this.state.nameToSearch
                )}
              >
                Search
              </button>
              <ul>
                {Object.keys(this.state.friends).map((name) => {
                  return (
                    <li onClick={this.onCreateNewChat} key={name}>
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={classes.messagingArea}></div>
          </section>
        </secion>
      </>
    );
  }
}
