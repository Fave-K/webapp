import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "src/Routes";
import store, { persistor } from "store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import "./app.css";
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
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
