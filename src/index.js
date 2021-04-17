import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from './App';
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";

var hist = createBrowserHistory();

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
ReactDOM.render(
  <Components />,
  document.getElementById("root")
);
