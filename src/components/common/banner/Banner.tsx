import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
const Banner = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col className="px-0" md={3}>
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Cras justo odio more here</span>
              <IoIosArrowForward />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Cras justo odio</span>
              <IoIosArrowForward />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Cras justo odio justo pretty</span>
              <IoIosArrowForward />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Cras justo odio</span>
              <IoIosArrowForward />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>lorem diabo justo odio</span>
              <IoIosArrowForward />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
