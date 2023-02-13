import * as actionTypes from './actionTypes';

export const loadProductCards = () => ({ type: actionTypes.LOAD_PRODUCT_CARDS });

export const loadProductCardsSuccess = data => ({ type: actionTypes.LOAD_PRODUCT_CARDS_SUCCESS, data });

export const loadProductCardsFail = () => ({ type: actionTypes.LOAD_PRODUCT_CARDS_FAIL });
