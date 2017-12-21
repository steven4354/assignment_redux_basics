import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {groceryListReducer} from './reducers'
import {addItem, purchaseItem} from './actions'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(groceryListReducer);

let unsubscribe = store.subscribe(() =>{
  console.log(store.getState());
})

store.dispatch(addItem(
  {
    name: 'Pringles',
    description: 'Unhealthy',
  })
)

store.dispatch(purchaseItem(1));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
