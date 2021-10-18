import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme} from 'react-loading-skeleton';

const HomePageSkeleton = () => {
  return (
    <SkeletonTheme color="lightgrey" highlightColor='grey'>
    <Container>
      <Row>
        {
          Array(12).fill('').map((each, index)=> <div key={index} className="col-md-3">
            <Skeleton height={200}/>
            <Skeleton height={40}/>
            <Skeleton height={20} width={70}/>
            <Skeleton height={20} width={150}/>
          </div> )
        }
      </Row>
    </Container>
    </SkeletonTheme>
  );
};

export default HomePageSkeleton;