import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { UseIntersectionObserver } from './hooks/UseIntersectionObserver';
import smart_watch_1 from '../pics/digital_watches/classic smartWatch.jpg';
import smart_watch_2 from '../pics/digital_watches/digital sport watch.jpg';
import smart_watch_3 from '../pics/digital_watches/dual core call digitalWatch.jpg';
import smart_watch_4 from '../pics/smart_watches/smart_watch_ (10).jpg';
import smart_watch_5 from '../pics/digital_watches/full hd digitalWatch.jpg';
import smart_watch_6 from '../pics/digital_watches/glory digitalWatch.jpg';
import smart_watch_7 from '../pics/digital_watches/golden digitalWatch.jpg';
import smart_watch_8 from '../pics/digital_watches/joyroom classic digitalWatch.jpg';

export default function SmartWatches({ onAddToCart }) {
    const { ref, inView } = UseIntersectionObserver({ triggerOnce: true });
    const [showModal, setShowModal] = useState(false);
    const [selectedWatch, setSelectedWatch] = useState(null);

    const handleShowModal = (watch) => {
        setSelectedWatch(watch);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedWatch(null);
    };

    const services = [
        { id: 1, name: 'Digital Watch', price: '$100', oldPrice: '$120', imageUrl: smart_watch_1 },
        { id: 2, name: 'Digital Watch', price: '$150', oldPrice: '$180', imageUrl: smart_watch_2 },
        { id: 3, name: 'Digital Watch', price: '$200', oldPrice: '$250', imageUrl: smart_watch_3 },
        { id: 4, name: 'Digital Watch', price: '$80', oldPrice: '$100', imageUrl: smart_watch_4 },
        { id: 5, name: 'Digital Watch', price: '$50', oldPrice: '$70', imageUrl: smart_watch_5 },
        { id: 6, name: 'Digital Watch', price: '$50', oldPrice: '$70', imageUrl: smart_watch_6 },
        { id: 7, name: 'Digital Watch', price: '$300', oldPrice: '$350', imageUrl: smart_watch_7 },
        { id: 8, name: 'Digital Watch', price: '$300', oldPrice: '$350', imageUrl: smart_watch_8 }
    ];

    return (
        <Container className={`my-5 ${inView ? 'fade-in' : 'hidden'}`} ref={ref}>
            <h2 className="text-center my-4 text-dark">Digital Watches</h2>
            <Row>
                {services.map(service => (
                    <Col xs={12} md={4} lg={3} sm={6} className="mb-4" key={service.id}>
                        <Card className="h-100 no-border shadow">
                            <Card.Img variant="top" src={service.imageUrl} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>
                                    <p><strong>Price:</strong> {service.price}</p>
                                    <p><strike><small>Old Price: {service.oldPrice}</small></strike></p>
                                </Card.Text>
                                <Button variant="warning" onClick={() => handleShowModal(service)}>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Add to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedWatch && (
                        <div className="text-center">
                            <img src={selectedWatch.imageUrl} alt={selectedWatch.name} className="img-fluid mb-3" style={{ maxWidth: '100px' }} />
                            <h5>{selectedWatch.name}</h5>
                            <p><strong>Price:</strong> {selectedWatch.price}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => {
                        onAddToCart(selectedWatch); // Make sure this function is updated to handle the selectedWatch
                        handleCloseModal();
                    }}>
                        Add to Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}



