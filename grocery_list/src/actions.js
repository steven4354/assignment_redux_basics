export const ADD_ITEM = "ADD_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";
export const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER";
export const SET_SORT = "SET_SORT";

var counter = 3;

export function addItem(data) {
  //data = {name: 'name', description: 'description'}
  return {
    type: ADD_ITEM,
    data: {...data, purchased: false, id: counter++}
  };
}

export function purchaseItem(id) {
  return {
    type: PURCHASE_ITEM,
    data: id
  };
}

export function setPurchaseFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data: data
  };
}

export function sort(data){
  return{
    type: SET_SORT,
    data:data
  }
}
