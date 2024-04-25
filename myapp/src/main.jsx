import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Login } from "./Login.jsx";
import Routing from "./Routing.jsx";
import { BrowserRouter } from "react-router-dom";
import DashBoard from "./DashBoard.jsx";
import { EmployeeDashboard } from "./EmployeeDashboard.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <Provider store={store}>
    <DashBoard/>
  </Provider>

 
  // </React.StrictMode>,
);
