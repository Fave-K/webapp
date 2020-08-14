import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "src/Routes";
import store from "store/configureStore";

import "./app.css";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

// if ("serviceWorker" in navigator) {
// 	window.addEventListener("load", function() {
// 		navigator.serviceWorker
// 			.register("./serviceWorker.js", { scope: "/" })
// 			.then(() => {
// 				// console.log(registration)
// 			})
// 			.catch(error => {
// 				throw error
// 			})
// 	})
// }
