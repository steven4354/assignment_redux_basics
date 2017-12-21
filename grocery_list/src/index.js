import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//redux
import {createStore} from "redux";
import {groceryListApp} from "./reducers";
import {addItem, purchaseItem, setPurchaseFilter, sort} from "./actions";

let store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addItem({
    name: "Pringles",
    description: "Unhealthy"
  })
);

store.dispatch(
  addItem({
    name: "strawberries",
    description: "more fruits"
  })
);

store.dispatch(purchaseItem(1));

store.dispatch(setPurchaseFilter("SHOW_PURCHASED"));

store.dispatch(sort({category:"name", order:"ASC"}));

store.dispatch(sort({category:"name", order:"DESC"}));


store.dispatch(sort({category:"description", order:"ASC"}));
store.dispatch(sort({category:"description", order:"DESC"}));



ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
