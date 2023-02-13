import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
