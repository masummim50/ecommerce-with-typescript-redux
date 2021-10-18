import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header__component">
      <div className="top-header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-3">
            <li>
              <FiPhoneCall />
              <a href="tel:01775208404">01775208404</a>
            </li>
            <li>
              <HiOutlineMail />
              <a href="mail-to:masummim50@gmail.com">masummim50@gmail.com</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="#">Save big on our app</a>
          </div>
        </Container>
      </div>
      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center">
            <Link to='/'>
            <img className="brand-logo" src={logo} alt="Logo" />
            </Link>
            <InputGroup className="px-5">
              <FormControl className="border border-primary shadow-none"></FormControl>
              <Button variant="primary shadow-none">
                <BiSearch />
              </Button>
            </InputGroup>
          </div>
        </Container>
      </div>
      <div className="nav-bar bg-dark">
        <Container>
          <Row>
            <Col md={3} className="bg-primary">
              <Navbar.Brand href="#home" className="text-white category d-block text-center">Navbar</Navbar.Brand>
            </Col>
            <Col className="text-end px-0" md={8}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
