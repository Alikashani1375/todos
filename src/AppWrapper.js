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
    <Router exact>
      <div className="Bg">
        <div className="Bg1">
          <App />
          <main>
            <Switch>
              <Route exact path="/todos" component={Root} />
              <Route path="/todos/register" component={Signup} />
              <Route path="/todos/addtodo" component={Addtodo} />
              <Route path="/todos/yourtodos" component={FetchTodos} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}
