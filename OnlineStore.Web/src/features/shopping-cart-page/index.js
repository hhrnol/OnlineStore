import React, { useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartApi from '../../api/cartApi';
import LoadingAnimation from '../../common/components/loading-animation';
import ProductInCart from './components/product-in-cart';
import { clearShoppingCart } from './actions';
import './shopping-cart.css';

const calculateTotalPrice = products =>
  products.reduce((totalPrice, currentProduct) => totalPrice + currentProduct.price * currentProduct.count, 0);

const ShoppingCartPage = () => {
  const { data, isLoading, hasError } = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(data));
  const dispatch = useDispatch();

  const handleTotalPriceChange = value => setTotalPrice(prev => prev + value);

  const handleCheckout = async () => {
    await CartApi.checkout(data);
    dispatch(clearShoppingCart());
  };

  if (hasError) {
    return <Alert variant="danger">General server error!</Alert>;
  }

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Container className="shopping-cart">
          <div className="shopping-cart__products">
            {data.map((product, index) => (
              <div key={index}>
                <ProductInCart product={product} onCountChange={handleTotalPriceChange} />
              </div>
            ))}
          </div>
          <div className="shopping-cart__footer">
            <span className="shopping-cart__total-price">TOTAL: {totalPrice}₴</span>
            <Button variant="success" className="shopping-cart__checkout-button" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </Container>
      )}
    </>
  );
};

export default ShoppingCartPage;
