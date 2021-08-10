import React from "react";
import ReactDOM from "react-dom";

import newStore from "./store/store";
import { Provider } from "react-redux";

import App from "./App";

const store = newStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
