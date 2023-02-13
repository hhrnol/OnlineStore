import UserSessionService from '../../common/services/userSessionService';
import initialState from '../../store/initialState';
import * as actionTypes from './actionTypes';

const cart = UserSessionService.getShoppingCart();
const initStateWithCart = { ...initialState.cart, data: cart ?? [] };

const shoppingCartReducer = (state = initStateWithCart, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.LOAD_CART:
      return { ...state, isLoading: true };
    case actionTypes.LOAD_CART_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case actionTypes.LOAD_CART_FAIL:
      return { ...state, isLoading: false, hasError: true };

    case actionTypes.ADD_TO_SHOPPING_CART:
      return {
        ...state,
        data: !state.data.find(p => p.id === action.product.id) ? [...state.data, action.product] : [...state.data],
      };
    case actionTypes.REMOVE_FROM_SHOPPING_CART:
      return { ...state, data: state.data.filter(p => p.id !== action.id) };
    case actionTypes.CLEAR_SHOPPING_CART:
      return { ...state, data: [] };

    case actionTypes.UPDATE_PRODUCT_QUANTITY:
      newState = JSON.parse(JSON.stringify(state));
      newState.data.find(p => p.id === action.data.id).count = action.data.quantity;
      return newState;

    default:
      return state;
  }
};

export default shoppingCartReducer;
