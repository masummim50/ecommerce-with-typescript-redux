import React from 'react';
import { Card } from 'react-bootstrap';
import { IProduct } from 'models/types';
import { Link } from 'react-router-dom';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
// eslint-disable-next-line react/prop-types
const ProductCard = (props: { product: IProduct }) => {
  const {_id, name, img, price, star, starCount } = props.product;
  return (
    <Link to={`/productdetails/${_id}`} className="col-md-3 mb-4">
      <Card className="shadow h-100">
      <Card.Img className="p-4 border-bottom" src={img}/>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Text>{name.slice(0,30)}...</Card.Text>
        <div className="price-info">
        <Card.Text>${price}</Card.Text>
        {
          new Array(star).fill('').map((st, index)=> <AiFillStar key={index}/>)
        }
        {
          Array(5-star).fill('').map((st, index)=> <AiOutlineStar key={index}/>)
        }
        <span>({starCount})</span>
        </div>
      </Card.Body>
    </Card>
    </Link>
  );
};

export default ProductCard;