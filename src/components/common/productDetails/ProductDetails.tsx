import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProductsService from 'services/ProductsService';
import { IProduct } from './../../../models/types.d';
import useAsync from 'hooks/useAsync';
import ProductDetailsSkeleton from 'components/loadingSkeleton/ProductDetailsSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/rootReducer';

import { addToCart, clearCart } from './../../../redux/actionCreators/cartAction';


const ProductDetails = () => {
  const { id } = useParams<{id:string}>();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const addedProducts = useSelector((state:AppState)=> state.cart);
  // const [productDetails, setProductDetails] =useState<IProduct>({} as IProduct);
  // const {name, img} = productDetails;
  // useEffect(()=>{
  //   ProductsService.getProductsById(id)
  //   .then(res=> setProductDetails(res[0]))
  // },[id])
  const {data, isLoading } = useAsync<IProduct[]>(()=>ProductsService.getProductsById(id));
  console.log(data, isLoading)
  const {name, img } = (data[0] || {}) as IProduct;
  return (
    <Container>
      <Row className="align-items-center">
        {
          !name && <ProductDetailsSkeleton/>
        }
        <div className="col-md-6 text-align-center">
          <img src={img}/>
        </div>
        <div className="col-md-6">
          {name}
        </div>
        <button 
          onClick={()=> dispatch(addToCart(data[0]))}
        >add it</button>
        <button onClick={()=> dispatch(clearCart())}>clear</button>
      </Row>
    </Container>
  );
};

export default ProductDetails;