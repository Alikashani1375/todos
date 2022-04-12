import React from "react";
import { Provider } from "react-redux";
import datastore from "./components/redux/store";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Addtodo from "./components/Addtodo";
import Signup from "./components/Signup";
import "./App.css";
import FetchTodos from "./components/FetchTodos";
import Root from "./components/Root";

export default function AppWrapper() {
  return (
    <div className="Bg">
      <div className="Bg1">
        <Provider store={datastore}>
          <Router exact>
            <App />

            <main>
              <Switch>
                <Route path="/register" component={Signup} />
                <Route path="/addtodo" component={Addtodo} />
                <Route path="/yourtodos" component={FetchTodos} />
              </Switch>
            </main>
          </Router>
        </Provider>
      </div>
    </div>
  );
}
