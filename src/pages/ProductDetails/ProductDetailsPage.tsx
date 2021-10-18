import Banner from 'components/common/banner/Banner';
import Footer from 'components/common/footer/Footer';
import Header from 'components/common/Header';
import ProductDetails from 'components/common/productDetails/ProductDetails';
import React from 'react';

const ProductDetailsPage = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <ProductDetails/>
    <Footer/>
    </>
  );
};

export default ProductDetailsPage;