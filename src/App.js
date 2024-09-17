import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import SmartWatches from './components/SmartWatches';
import About from './components/About';
import DigitalWatches from './components/DigitalWatches';
import Footer from './components/Footer';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import Contact from './components/Contact';
import CheckoutModal from './components/CheckoutModal'; // Import the CheckoutModal component

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false); // State for checkout modal

  // Load cart items from local storage on component mount
  useEffect(() => {
    try {
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
      }
    } catch (error) {
      console.error("Failed to load cart items from local storage", error);
      localStorage.removeItem('cartItems'); // Clear corrupted data
    }
  }, []);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items to local storage", error);
    }
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If item exists, double its price
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, price: `$${(parseFloat(item.price.slice(1)) * 2).toFixed(2)}` }
            : item
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...product }];
      }
    });
  };

  const handleShowCartModal = () => setShowCartModal(true);
  const handleCloseCartModal = () => setShowCartModal(false);

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    setShowCartModal(false); // Close the cart modal
    setShowCheckoutModal(true);   // Show the checkout modal
  };

  const handleCloseCheckoutModal = () => setShowCheckoutModal(false);

  const handleCompletePurchase = (orderDetails) => {
    console.log('Order details:', orderDetails);
    alert('Purchase complete!');
    setCartItems([]); // Optionally clear the cart after purchase
    handleCloseCheckoutModal();
  };

  return (
    <div>
      <Navigation onCartClick={handleShowCartModal} />
      <Slider />
      <SmartWatches onAddToCart={handleAddToCart} />
      <About />
      <DigitalWatches onAddToCart={handleAddToCart} />
      <Contact />
      <Footer />

      {/* Cart Modal */}
      <Modal show={showCartModal} onHide={handleCloseCartModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex align-items-center">
                  <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '50px', marginRight: '15px' }} />
                  <div className="flex-grow-1">
                    <h6>{item.name}</h6>
                    <p><strong>Price:</strong> {item.price}</p>
                  </div>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCartModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Checkout Modal */}
      <CheckoutModal 
        cartItems={cartItems} 
        show={showCheckoutModal} 
        onClose={handleCloseCheckoutModal} 
        onCompletePurchase={handleCompletePurchase} 
      />
    </div>
  );
}

export default App;
