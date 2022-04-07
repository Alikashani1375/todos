import React from "react";
import { Provider } from "react-redux";
import datastore from "./components/redux/store";
import App from "./App";
import { Route, Routes } from "react-router-dom";
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
          <App />
          <Routes>
            <Route path="" element={<Root />} />
            <Route path="Register" element={<Signup />} />
            <Route path="Addtodo" element={<Addtodo />} />
            <Route path="Yourtodos" element={<FetchTodos />} />
          </Routes>
        </Provider>
      </div>
    </div>
  );
}
