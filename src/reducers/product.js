import * as Types from "./../constants/ActionType";
var initialSatate = [];

const products = (state = initialSatate, action) => {
  const { id } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS: {
      state = action.products;
      return [...state];
    }
    case Types.DELETE_PRODUCT: {
      let temp = state.filter((el) => el.id !== id);
      return [...temp];
    }
    case Types.ADD_PRODUCTS: {
      state.push(action.product);
      return [...state];
    }
    case Types.UPDATE_PRODUCTS: {
        let index = findIndex(state, action.product.id);
        state[index] = action.product;
        return [...state];
    }
    default: {
      return [...state];
    }
  }
};

const findIndex = (product, id) => {
  let index = -1;
  if (product.length > 0) {
    for (let i = 0; i < product.length; i++) {
      if (product[i].id === id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default products;
