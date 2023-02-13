import initialState from '../../store/initialState';
import * as actionTypes from './actionTypes';

const homeReducer = (state = initialState.home, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT_CARDS:
      return { ...state, isLoading: true };
    case actionTypes.LOAD_PRODUCT_CARDS_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case actionTypes.LOAD_PRODUCT_CARDS_FAIL:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

export default homeReducer;
