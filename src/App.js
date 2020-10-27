import React from "react";
import "./App.css";
import LogInPage from "../src/Components/LogInPage/LogInPage";
import HomePage from "./Components/TheMainPage/Home";
//add router
import { BrowserRouter, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <LogInPage />;
      </Route>

      <Route path="/home">
        <HomePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
