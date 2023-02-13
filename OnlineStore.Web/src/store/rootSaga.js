import { all } from 'redux-saga/effects';
import home from '../features/home-page/saga';
import productDetails from '../features/product-page/saga';
import shoppingCart from '../features/shopping-cart-page/saga';

export default function* rootSaga() {
  yield all([home(), productDetails(), shoppingCart()]);
}
