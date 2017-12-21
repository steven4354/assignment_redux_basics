import {ADD_ITEM} from './actions'
import {PURCHASE_ITEM} from './actions'

const initialState = {
  items: []
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
        items: state.items.map(item=>{
          if (item.id === action.data){
            let newItem = Object.assign({}, item);
            newItem.purchased=true;
            return newItem;
          }
          return item;
        })
      }
    default:
      return state;
  }
}
