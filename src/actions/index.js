import * as Types from "./../constants/ActionType";
import api from "./../utils/apiCaller";

export const actFetchProductRequest = () => {
  return (dispatch) => {
    return api("products", "GET", null).then((res) => {
      dispatch(actFetchProduct(res.data));
    });
  };
};

export const actFetchProduct = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return api(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return api("products", "POST", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCTS,
    product,
  };
};

export const actgetProductRequest = (id) => {
  return (dispatch) => {
    return api(`products/${id}`, "GET", null).then((res) => {
      dispatch(actgetProduct(res.data));
    });
  };
};

export const actgetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCTS,
    product
  };
};

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return api(`products/${product.id}`, "PUT", product).then((res) => {
          dispatch(actUpdateProduct(res.data));
        });
      };
}

export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCTS,
    product
  };
};
