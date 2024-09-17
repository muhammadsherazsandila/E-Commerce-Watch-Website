import React, { useState } from 'react';
import { Modal, Button, ListGroup, Container, Form } from 'react-bootstrap';

const CheckoutModal = ({ cartItems, show, onClose, onCompletePurchase }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);

  const handleCompletePurchase = () => {
    if (paymentMethod && address && phoneNumber) {
      onCompletePurchase({ paymentMethod, address, phoneNumber }); // Pass additional data on complete purchase
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>{item.name}</h6>
                  <p><strong>Price:</strong> {item.price}</p>
                </div>
                <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '50px' }} />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4>Total: ${totalAmount.toFixed(2)}</h4>
          <Form>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter payment method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Back to Cart
        </Button>
        <Button variant="primary" onClick={handleCompletePurchase}>
          Complete Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutModal;
