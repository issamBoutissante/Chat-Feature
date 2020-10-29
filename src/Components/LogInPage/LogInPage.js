import React, { Component } from "react";
import Layout from "../messagingArea/Layout/Layout";
import MyInput from "../messagingArea/Layout/MyTextInput/MyTextInput";
import MyButton from "../messagingArea/Layout/MyButton/MyButton";
import func from "./LogInFunctions/LogInFunctions";
import { Redirect } from "react-router-dom";

export default class LogInPage extends Component {
  state = {
    name: "",
    showSignUp: false,
    isAuthenticated: false,
    AccountID: null,
  };

  onSignUpHandler = () => {
    this.setState((prevState) => {
      return { name: "", showSignUp: !prevState.showSignUp };
    });
  };
  onSingInHandler = () => {
    func.signIn(this.state.name).then((res) => {
      if (res.isExist) {
        this.setState({ AccountID: res.AccountID, isAuthenticated: true });
      }
    });
  };
  onChangeTextHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <Layout>
        <h1 style={styles.text}>Hello Honey</h1>
        <MyInput value={this.state.name} onChange={this.onChangeTextHandler} />
        <MyButton onClick={this.onSingInHandler}>
          sign in
          {this.state.isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/home",
                state: { AccountID: this.state.AccountID },
              }}
            />
          ) : null}
        </MyButton>

        <MyButton onClick={this.onSignUpHandler}>sign up</MyButton>
        {this.state.showSignUp ? (
          <>
            <MyInput
              value={this.state.name}
              onChange={this.onChangeTextHandler}
            />
            <MyButton onClick={func.signUp.bind(null, this.state.name)}>
              Create Account
            </MyButton>
          </>
        ) : null}
      </Layout>
    );
  }
}

const styles = {
  text: {
    color: "rgba(9, 113, 231, 0.931",
    fontFamily: "Helvetica",
  },
};
