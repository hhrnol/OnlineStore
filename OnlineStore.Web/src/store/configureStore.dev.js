import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
