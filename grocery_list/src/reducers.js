import {combineReducers} from "redux";

import {ADD_ITEM, PURCHASE_ITEM, SET_PURCHASED_FILTER, SET_SORT} from "./actions";

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

    case SET_SORT:
      //sort by name or description asc/desc
      //{category: name/description, order:asc/desc}
      let sort = action.data;
      return {
        ...state,
        items: state.items.slice(0).sort((a,b)=>{
          let order;
          if (sort.order==="ASC"){
            order=1;
          }
          else if (sort.order==="DESC"){
            order=-1
          }
          else {
            order=0
          }
          if (a[sort.category].toUpperCase() > b[sort.category].toUpperCase()){

            return order
          }
          return order * -1
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
