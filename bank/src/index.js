import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//redux
import {createStore} from "redux";
import {bankApp} from "./reducers";
import {deposit, withdraw, transfer, showAll, showOne, filter} from "./actions";

let store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  deposit({
    id: 1,
    amount: 99
  })
);

store.dispatch(
  transfer({
    transferTo: 1,
    transferFrom: 2,
    amount: 91
  })
);

store.dispatch(
  deposit({
    id: 1,
    amount: 2
  })
);

store.dispatch(showAll({}));

store.dispatch(showOne({id: 1}));

store.dispatch(
  filter({
    id: 1,
    startDate: new Date("2017-12-21"),
    endDate: new Date("2017-12-22")
  })
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
