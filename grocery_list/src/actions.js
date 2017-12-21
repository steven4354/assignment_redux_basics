export const ADD_ITEM = "ADD_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";


var counter=1;

export function addItem(data) {
  //data = {name: 'name', description: 'description'}
  return {
    type: ADD_ITEM,
    data:{...data, purchased:false, id:counter++}
  };
}

export function purchaseItem(id){
  return{
    type: PURCHASE_ITEM,
    data:id
  }
}