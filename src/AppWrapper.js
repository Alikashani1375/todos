import React from "react";
import { Provider } from "react-redux";
import datastore from "./components/redux/store";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Router>
            <App />
            <main>
              <Switch>
                <Route exact path="/todos" component={Root} />
                <Route exact path="/todos/Register" component={Signup} />
                <Route exact path="/todos/Addtodo" component={Addtodo} />
                <Route exact path="/todos/Yourtodos" component={FetchTodos} />
              </Switch>
            </main>
          </Router>
        </Provider>
      </div>
    </div>
  );
}
