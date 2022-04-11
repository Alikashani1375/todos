import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "./AppWrapper";

ReactDOM.render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>,
  document.getElementById("root")
);
