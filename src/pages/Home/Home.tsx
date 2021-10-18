import React from "react";
import Header from "../../components/common/Header";
import Banner from "../../components/common/banner/Banner";
import { IProduct } from "models/types";
import ProductsService from "services/ProductsService";
import ProductCard from "components/common/productCard/ProductCard";
import { Container, Row } from "react-bootstrap";
import useAsync from "hooks/useAsync";
import Footer from "components/common/footer/Footer";
import HomePageSkeleton from "components/loadingSkeleton/HomePageSkeleton";

const Home = () => {
  const {data, isLoading, isSuccess, isError, error} = useAsync(ProductsService.getProducts)
  
  return (
    <>
      <Header />
      <Banner />
      {
        isLoading && <HomePageSkeleton/>
      }
      <Container>
        {
          console.log(data, isLoading, isSuccess, isError, error)
        }
        <Row>
          {data.map((product: IProduct) => (
            <ProductCard key={product.key} product={product} />
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
