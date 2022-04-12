import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import datastore from "./components/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={datastore}>
    <AppWrapper />
  </Provider>,
  document.getElementById("root")
);
