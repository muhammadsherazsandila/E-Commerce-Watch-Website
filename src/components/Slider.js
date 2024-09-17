import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider_1 from '../pics/slider_iamges/slider_image_1.jpg';
import slider_2 from '../pics/slider_iamges/slider_image_2.jpg';
import slider_3 from '../pics/slider_iamges/slider_image_3.jpg';
import slider_4 from '../pics/slider_iamges/slider_image_4.jpg';
import slider_5 from '../pics/slider_iamges/slider_image_5.jpg';
import { UseIntersectionObserver } from './hooks/UseIntersectionObserver';

export default function Slider() {
    const { ref, inView } = UseIntersectionObserver({ triggerOnce: true });

    return (
        <div ref={ref} className={`slider-container ${inView ? 'fade-in' : 'hidden'}`}>
            <Carousel interval={1500}> {/* Set interval to 3000 milliseconds (3 seconds) */}
                <Carousel.Item>
                    <img className="d-block w-100" src={slider_2} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider_1} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider_3} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider_4} alt="Fourth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider_5} alt="Fifth slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
