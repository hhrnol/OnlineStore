import * as actionTypes from './actionTypes';

export const loadProduct = id => ({ type: actionTypes.LOAD_PRODUCT_DETAILS, id });

export const loadProductSuccess = data => ({ type: actionTypes.LOAD_PRODUCT_DETAILS_SUCCESS, data });

export const loadProductFail = () => ({ type: actionTypes.LOAD_PRODUCT_DETAILS_FAIL });
