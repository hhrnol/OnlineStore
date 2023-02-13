import { combineReducers } from 'redux';
import homeReducer from '../features/home-page/reducer';
import productReducer from '../features/product-page/reducer';
import cartReducer from '../features/shopping-cart-page/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
