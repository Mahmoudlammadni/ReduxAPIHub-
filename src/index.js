import React from "react";
import ReactDOM from "react-dom/client";

import App2 from "./new1/app2";

import { Provider } from 'react-redux';
import { legacy_createStore } from "redux";
import redu_x from "./new1/redux";

import reportWebVitals from "./reportWebVitals";
const store = legacy_createStore(redu_x)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
   <App2/>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
