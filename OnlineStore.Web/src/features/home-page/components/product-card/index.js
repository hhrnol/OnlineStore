import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './product-card.css';

const ProductCard = ({ product }) => (
  <Card className="product-card">
    <div className="product-card__image">
      <Card.Img src={product.imageLink} />
    </div>
    <Card.Body>
      <Card.Title className="product-card__title">{product.model}</Card.Title>
      <div className="product-card__info">
        <Card.Text className="product-card__price">{product.price}₴</Card.Text>
        <Link className="product-card__link" to={`/product_details/${product.id}`}>
          See more
        </Link>
      </div>
    </Card.Body>
  </Card>
);

export default ProductCard;
