import { all, select, takeEvery } from '@redux-saga/core/effects';
import UserSessionService from '../../common/services/userSessionService';
import * as actionTypes from './actionTypes';

const actionsToWatch = [
  actionTypes.ADD_TO_SHOPPING_CART,
  actionTypes.REMOVE_FROM_SHOPPING_CART,
  actionTypes.UPDATE_PRODUCT_QUANTITY,
  actionTypes.CLEAR_SHOPPING_CART,
];

export function* watchCart() {
  yield takeEvery(actionsToWatch, saveCartToLocalStorage);
}

export function* saveCartToLocalStorage() {
  const cartData = yield select(state => state.cart.data);
  UserSessionService.setShoppingCart(cartData);
}

export default function* () {
  yield all([watchCart()]);
}
