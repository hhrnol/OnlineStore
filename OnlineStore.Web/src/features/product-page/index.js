import React, { useEffect } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingAnimation from '../../common/components/loading-animation';
import { addToShoppingCart } from '../shopping-cart-page/actions';
import { loadProduct } from './actions';
import './product-page.css';

const ProductPage = () => {
  const { data, isLoading, hasError } = useSelector(state => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProduct(id));
  }, [dispatch, id]);

  const handleAddToCartClick = async () => {
    const product = { id: data.id, model: data.model, imageLink: data.imageLink, price: data.price, count: 1 };
    dispatch(addToShoppingCart(product));
  };

  if (hasError) {
    return <Alert variant="danger">General server error!</Alert>;
  }

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Container className="product-page">
          <Row>
            <Col className="product-page__picture-and-price">
              <img src={data.imageLink} alt="imgSrc" className="product-page__image" />
              <div className="product-page__price-and-button-wrapper">
                <span className="product-page__price">{data.price}₴</span>
                <button className="add-to-cart-button" onClick={handleAddToCartClick}>
                  <span>Add to cart</span>
                  <FaCartPlus className="add-to-cart-button__icon" />
                </button>
              </div>
            </Col>
            <Col className="product-page__title-and-characteristics">
              <h2 className="product-page__product-title">{data.model}</h2>
              <h5>Screen</h5>
              <div>
                <span>Diagonal</span>
                <span>{data.diagonal}</span>
              </div>
              <div>
                <span>Refresh rate</span>
                <span>{data.refreshRate}</span>
              </div>
              <h5>Processor</h5>
              <div>
                <span>CPU</span>
                <span>{data.processor}</span>
              </div>
              <div>
                <span>Operating System</span>
                <span>{data.operatingSystem}</span>
              </div>
              <h5>RAM</h5>
              <div>
                <span>Amount of RAM</span>
                <span>{data.amountOfRam}</span>
              </div>
              <h5>Storage</h5>
              <div>
                <span>SSD</span>
                <span>{data.ssd}</span>
              </div>
              <h5>GPU</h5>
              <div>
                <span>Video card</span>
                <span>{data.videoCard}</span>
              </div>
              <h5>Network adapters</h5>
              <div>
                <span>Wi-Fi</span>
                <span>{data.wifi}</span>
              </div>
              <div>
                <span>Bluetooth</span>
                <span>{data.bluetooth}</span>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductPage;
