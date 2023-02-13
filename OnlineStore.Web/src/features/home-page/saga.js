import { all, call, put, takeLatest } from 'redux-saga/effects';
import HomeApi from '../../api/homeApi';
import { loadProductCardsFail, loadProductCardsSuccess } from './actions';
import { LOAD_PRODUCT_CARDS } from './actionTypes';

export function* watchHome() {
  yield takeLatest(LOAD_PRODUCT_CARDS, fetchLaptops);
}

export function* fetchLaptops() {
  try {
    const res = yield call(HomeApi.getProductCards);
    yield put(loadProductCardsSuccess(res.data));
  } catch (error) {
    yield put(loadProductCardsFail());
  }
}

export default function* () {
  yield all([watchHome()]);
}
