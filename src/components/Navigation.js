import React, { useEffect, useState, useCallback } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaShoppingCart, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import logo from '../pics/smart_watches/smart_watch_7.jpg';
import './navigation.css';

export default function Navigation({ onCartClick }) {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <Navbar className={`navbar bg-white text-dark shadow-lg ${visible ? 'navbar-visible' : 'navbar-hidden'}`} expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} className='logo' height={50} alt="logo" />
                    <span className='company-name'>Sandila Watches</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
                        <NavDropdown title="Men" id="men-dropdown">
                            <NavDropdown.Item href="#young-boys">Boys</NavDropdown.Item>
                            <NavDropdown.Item href="#small-boys">Kids</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Women" id="women-dropdown">
                            <NavDropdown.Item href="#young-girls">Girls</NavDropdown.Item>
                            <NavDropdown.Item href="#small-girls">Kids</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#all-products">All Products</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to="contact" smooth={true} duration={500} className='text-decoration-none hover-black'>
                                <FaPhoneAlt /> Contact
                            </Link>
                        </Nav.Link>
                        <Nav.Link onClick={onCartClick} className='text-decoration-none hover-black' >
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
