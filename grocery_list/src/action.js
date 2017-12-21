const ADD_ITEM = "ADD_ITEM";

function addItem(data) {
  //data = {name: 'name', description: 'description'}
  return {
    type: ADD_ITEM,
    data
  };
}

const initialState = {
  items: []
};

function groceryListReducer(state = intialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.data]
      };
    default:
      return state;
  }
}
