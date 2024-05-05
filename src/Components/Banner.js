import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import navLogo from '../imgs/navLogo.png';
import horizontalCover from '../imgs/horizontalCover.png';
import verticalCover from '../imgs/verticalCover.png';
import CustomButton from './Elements/CustomButton';

const Banner = () => {
  const [orientationHorizontal, setOrientationHorizontal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setOrientationHorizontal(window.innerWidth >= 800);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id='home'
      className="h-100" // Use Bootstrap classes for height
      style={{
        backgroundImage: `url(${orientationHorizontal ? horizontalCover : verticalCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container fluid className="h-100"> {/* Container can be fluid for full width */}
        <Row className="justify-content-center align-items-center h-100">
          <Col xs={10} md={5} className="text-center">
            <img
              src={navLogo}
              alt="Navigation Logo"
              className="img-fluid" // Bootstrap class for responsive images
              style={{ maxHeight: '60%' }}
            />
          </Col>
          <Col xs={12} md={5} className="text-center">
            <h1 style={{ color: '#fff', fontSize: '2.5em' }}>Done with Dust</h1>
            <h4 style={{ color: '#f17a96' }}>Your Comfort, <br /> Our Commitment</h4>
            <br />
            <p style={{ color: '#fff' }}>
              At Done With Dust, we understand the importance of a clean and comfortable home. Our residential cleaning service is designed to provide top-notch cleaning solutions for your home, apartment, or any other residential space. We have a team of expert cleaners who are dedicated to making your living space sparkling clean and organized. From dusting to vacuuming and everything in between, we cover every aspect of residential cleaning to ensure your complete satisfaction.
            </p>
            <div style={{ color: '#fff' }}>

              <p>
                Location: <a style={{ color: '#f17a96' }} href="#mapModal" onClick={handleShow}>Miami, FL 33020</a><br />
                <Modal show={show} onHide={handleClose} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Our Location</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229929.22597780332!2d-80.39426962891655!3d25.782314662068746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1711884954016!5m2!1sen!2sus"
                      frameborder="0"
                      style={{ border: 0, width: '100%', height: '400px' }}

                    ></iframe>
                  </Modal.Body>
                  <Modal.Footer>
                    <CustomButton buttonText='Close' onClick={handleClose} />
                  </Modal.Footer>
                </Modal>
                Phone: <a style={{ color: '#f17a96' }} href="tel:3058505327">(305) 850-5327</a><br />
                Email: <a style={{ color: '#f17a96' }} href="mailto:contact@donewithdust.com">contact@donewithdust.com</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
