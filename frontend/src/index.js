"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_js_1 = require("./components/App/App.js");
var reportWebVitals_js_1 = require("./reportWebVitals.js");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
var root = client_1.createRoot(document.getElementById("root"));
root.render(
  <react_2.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <App_js_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_2.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_js_1.default)();
