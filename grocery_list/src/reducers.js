import {combineReducers} from "redux";

import {ADD_ITEM} from "./actions";
import {PURCHASE_ITEM} from "./actions";
import {SET_PURCHASED_FILTER} from "./actions";

const initialState = {
  items: [
    {
      name: "apples",
      description: "red fruits",
      purchased: false,
      id: 0
    },
    {
      name: "oranges",
      description: "orange fruits",
      purchased: false,
      id: 1
    },
    {
      name: "bananas",
      description: "yellow fruits",
      purchased: false,
      id: 2
    }
  ]
};

export function groceryListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.data]
      };
    case PURCHASE_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.data) {
            let newItem = Object.assign({}, item);
            newItem.purchased = true;
            return newItem;
          }
          return item;
        })
      };
    default:
      return state;
  }
}

export function groceryListFilterReducer(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

export const groceryListApp = combineReducers({
  groceryListReducer,
  groceryListFilterReducer
});
