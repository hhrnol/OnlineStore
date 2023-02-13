import * as actionTypes from './actionTypes';

export const loadCart = () => ({ type: actionTypes.LOAD_CART });

export const loadCartSuccess = data => ({ type: actionTypes.LOAD_CART_SUCCESS, data });

export const loadCartFail = () => ({ type: actionTypes.LOAD_CART_FAIL });

export const addToShoppingCart = product => ({ type: actionTypes.ADD_TO_SHOPPING_CART, product });

export const removeFromShoppingCart = id => ({ type: actionTypes.REMOVE_FROM_SHOPPING_CART, id });

export const updateProductQuantity = (id, quantity) => ({
  type: actionTypes.UPDATE_PRODUCT_QUANTITY,
  data: { id, quantity },
});

export const clearShoppingCart = () => ({ type: actionTypes.CLEAR_SHOPPING_CART });
