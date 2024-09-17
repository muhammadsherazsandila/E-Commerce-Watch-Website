import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; // Import custom CSS for styling
import owner from '../pics/background/company.jpg';

export default function About() {
    return (
        <div>
            <section className="about-section">
                <div className="background-container">
                    <div className="background-image"></div>
                    <div className="dark-overlay"></div>
                </div>
                <Container className="my-5">
                    <h2 className="text-center mb-4 text-white">About Sandila Watches</h2>
                    <Row>
                        <Col md={6} className="d-flex align-items-center">
                            <Card className="border-0 shadow-sm">
                                <Card.Img variant="top" src={owner} alt="Sandila Watches" />
                            </Card>
                        </Col>
                        <Col md={6}>
                            <h3 className="text-white">Our Story</h3>
                            <p className="text-white">
                                Welcome to Sandila Watches, where we blend timeless craftsmanship with modern innovation. 
                                At Sandila Watches, we believe that a watch is not just a timepiece but a statement of style and precision. 
                                Established with a passion for quality and elegance, our watches are designed to cater to both classic and contemporary tastes.
                            </p>
                            <h3 className="text-white">Our Mission</h3>
                            <p className="text-white">
                                Our mission is to create exceptional watches that combine superior functionality with aesthetic appeal. 
                                We are committed to using the finest materials and the latest technology to ensure that every Sandila watch meets the highest standards of quality and performance.
                            </p>
                            <h3 className="text-white">Why Choose Us?</h3>
                            <ul className="text-white">
                                <li>Expert craftsmanship</li>
                                <li>Elegant and durable designs</li>
                                <li>Exceptional customer service</li>
                                <li>Innovative features</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
