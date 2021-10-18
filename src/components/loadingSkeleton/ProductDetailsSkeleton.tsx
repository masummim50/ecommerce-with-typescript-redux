import React from "react";
import { Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <SkeletonTheme color="lightgrey" highlightColor="grey">
      <Row className="align-items-center">
        <div className="col-md-6 d-flex justify-content-center">
          <Skeleton height={300} width={300} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} />
          <Skeleton width={90} height={30} />
          <Skeleton count={6} />
        </div>
      </Row>
    </SkeletonTheme>
  );
};

export default ProductDetailsSkeleton;
