import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="footer bg-dark text-white py-3">
            <Container className="text-center">
                <p className="mb-0">
                    &copy; Sandila Watches 2024. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}
