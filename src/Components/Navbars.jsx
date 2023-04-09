import {React} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import {CartIcon} from "../Components/Icons";


function Navbars({getCartTotal, PAGE_CART, navigateTo, PAGE_PRODUCTS, SNACK_PAGE, SERVICES_PAGE, ABOUT_PAGE, SWALLOW_PAGE, PROTEINS_PAGE, DRINKS_PAGE, MEALS_PAGE, BOOKING_PAGE }) {
  return (
    <>
    <Navbar  expand="lg" fixed='top'  className='navbar-custom'>
      <Container fluid>
        <Navbar.Brand><Nav.Link onClick={() => navigateTo(PAGE_PRODUCTS)} style={{fontSize: "25px", fontWeight: "bold"}}>EldeeFoods</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
           
            <NavDropdown title="Meals" id="basic-nav-dropdown">
    <NavDropdown.Item><Nav.Link onClick={() => navigateTo(MEALS_PAGE)}>Meals</Nav.Link></NavDropdown.Item>
    <NavDropdown.Item><Nav.Link onClick={() => navigateTo(SWALLOW_PAGE)}>Swallow & Soup</Nav.Link></NavDropdown.Item>
    <NavDropdown.Item><Nav.Link onClick={() => navigateTo(PROTEINS_PAGE)}>Proteins</Nav.Link></NavDropdown.Item>
    <NavDropdown.Item><Nav.Link onClick={() => navigateTo(SNACK_PAGE)}>Snacks</Nav.Link></NavDropdown.Item>
    <NavDropdown.Item><Nav.Link onClick={() => navigateTo(DRINKS_PAGE)}>Drinks</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item></NavDropdown.Item>
            </NavDropdown>
             <Nav.Link onClick={() => navigateTo(ABOUT_PAGE)}> About us </Nav.Link>
             <Nav.Link onClick={() => navigateTo(SERVICES_PAGE)}> Services </Nav.Link>
            <Nav.Link onClick={() => navigateTo(PAGE_CART)}> <div style={{display: "flex"}}>
            <CartIcon/> <div>
                {getCartTotal()}
            </div>
                </div></Nav.Link>
                <Nav.Link onClick={() => navigateTo(BOOKING_PAGE)}> Bookings </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default Navbars;