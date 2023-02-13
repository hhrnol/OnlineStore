import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { removeFromShoppingCart, updateProductQuantity } from '../../actions';
import './product-in-cart.css';

const ProductInCart = ({ product, onCountChange }) => {
  const [count, setCount] = useState(product.count);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProductQuantity(product.id, count));
  }, [count, dispatch, product.id]);

  const increment = () => {
    onCountChange(product.price);
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    if (count <= 1) {
      setShowRemoveModal(true);
      return;
    }
    onCountChange(-product.price);
    setCount(prev => prev - 1);
  };

  const handleRemoveModalClose = () => setShowRemoveModal(false);
  const handleRemove = () => {
    dispatch(removeFromShoppingCart(product.id));
    onCountChange(-product.price);
    handleRemoveModalClose();
  };

  return (
    <>
      <Row className="product-in-cart">
        <Col md={2} className="product-in-cart__image-wrapper">
          <img src={product.imageLink} alt="laptop" />
        </Col>
        <Col md={5}>
          <h4 className="product-in-cart__title">{product.model}</h4>
        </Col>
        <Col md={3} className="product-in-cart__count-wrapper">
          <Button variant="success" onClick={increment} className="product-in-cart__button">
            <FiPlus className="product-in-cart__icon" />
          </Button>
          <span>{count}</span>
          <Button variant="danger" onClick={decrement} className="product-in-cart__button">
            <FiMinus className="product-in-cart__icon" />
          </Button>
        </Col>
        <Col md={2}>
          <span className="product-in-cart__price">{product.price * count}₴</span>
        </Col>
      </Row>
      <Modal show={showRemoveModal}>
        <Modal.Header>
          <Modal.Title>
            Do you want to remove <br /> {product.model}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRemoveModalClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductInCart;
