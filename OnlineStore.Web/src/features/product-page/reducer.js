import initialState from '../../store/initialState';
import * as actionTypes from './actionTypes';

const productReducer = (state = initialState.product, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT_DETAILS:
      return { ...state, isLoading: true };
    case actionTypes.LOAD_PRODUCT_DETAILS_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case actionTypes.LOAD_PRODUCT_DETAILS_FAIL:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

export default productReducer;
