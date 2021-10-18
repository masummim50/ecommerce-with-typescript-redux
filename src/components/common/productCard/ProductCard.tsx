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
      <Card className="shadow">
      <Card.Img className="p-4" src={img}/>
      <Card.Body>
        <Card.Text>{name.slice(0,30)}...</Card.Text>
        <Card.Text>${price}</Card.Text>
        {
          new Array(star).fill('').map((st, index)=> <AiFillStar key={index}/>)
        }
        {
          Array(5-star).fill('').map((st, index)=> <AiOutlineStar key={index}/>)
        }
        <span>({starCount})</span>
      </Card.Body>
    </Card>
    </Link>
  );
};

export default ProductCard;