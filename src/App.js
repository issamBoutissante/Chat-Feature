import React from "react";
import "./App.css";
import LogInPage from "../src/Components/LogInPage/LogInPage";
import HomePage from "./Components/TheMainPage/Home";
//add router
import { BrowserRouter, Route } from "react-router-dom";
//use context to share account between login and homepage

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <LogInPage />;
      </Route>
      <Route
        path="/home"
        render={(props) => <HomePage props={{ ...props }} />}
      />
    </BrowserRouter>
  );
}

export default App;
