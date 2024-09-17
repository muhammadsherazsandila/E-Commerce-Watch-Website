import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
export default function Contact() {
  return (
    <div>
      
      <div className="contact-form-container" id='contact'>
            {/* Background Image */}
            <div className="background-image"></div>

            {/* Contact Form */}
            <Container className="contact-form">
                <h2 className="text-center mb-4">Contact Us</h2>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formSubject" className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter the subject" />
                    </Form.Group>
                    <Form.Group controlId="formMessage" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    </div>
  )
}

