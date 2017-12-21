import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//redux
import {combineReducers, createStore} from "redux";

let store = createStore(bankApp);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
