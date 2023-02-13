import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from '../product-card';
import './product-list.css';

const ProductList = ({ productCards }) => (
  <Container className="product-list">
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {productCards.map((product, index) => (
        <Col key={index} className="product-list__col">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductList;
