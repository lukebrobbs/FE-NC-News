import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import { MakeMainRoutes } from "./routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MakeMainRoutes />
  </Provider>,
  document.getElementById("root")
);
