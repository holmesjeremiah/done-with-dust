import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import navLogo from '../../../imgs/navLogo.png';
import CustomButton from '../../Elements/CustomButton';
import MenuOverlay from './MenuOverlay';
import { Modal } from 'react-bootstrap';
import BookNow from '../../BookNow';


function CustomNav() {
  const [showMenu, setShowMenu] = useState(window.innerWidth < 1100);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBookNowButton, setShowBookNowButton] = useState(window.innerWidth > 400);
  const [activeSection, setActiveSection] = useState('home'); // State to track the active section

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  function scrollTo(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  const getCurrentSection = () => {

    let mostVisibleSectionId = navItems[0].docElId;
    let maxVisibleHeight = 0;

    navItems.forEach(sectionId => {
      const section = document.getElementById(sectionId.docElId);
      if (!section) return;

      const { top, bottom } = section.getBoundingClientRect();
      const visibleHeight = Math.min(window.innerHeight, bottom) - Math.max(0, top);

      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        mostVisibleSectionId = sectionId.docElId;
      }
    });

    setActiveSection(mostVisibleSectionId); // Update the active section state
  };

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth < 1100);
      setShowBookNowButton(window.innerWidth > 400);
    };

    const handleScroll = () => {
      getCurrentSection(); // Call this function on scroll
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll); // Add the scroll event listener

    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll); // Remove the scroll listener on cleanup
    };
  }, []);

  const navItems = [
    { title: 'Home', docElId: 'home' },
    { title: 'Services', docElId: 'services' },
    { title: 'Pricing', docElId: 'pricing' },
    { title: 'About Us', docElId: 'aboutUs' }
  ];

  // Function to determine button background color based on active section
  const getButtonBackgroundColor = (sectionId) => {
    return activeSection === sectionId ? '#f17a96' : '#242424'; // Change the color for the active section
  };

  return (
    <div style={{ background: '#242424', position: 'sticky', top: 0, maxWidth: '100vw', height: '100px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '15px 0', zIndex: '1000' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {showBookNowButton && (
          <CustomButton buttonText="Book Now" backgroundColor='#f17a96' onClick={handleModalShow} />
        )}
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Now</Modal.Title>
          </Modal.Header>
          <Modal.Body><BookNow closeModal={handleModalClose} /></Modal.Body>
        </Modal>
        <a href="/">
          <img src={navLogo} alt="Navigation Logo" style={{ border: '2px solid white', borderRadius: '50%', width: '20vw', maxWidth: '75px', margin: '0 10px' }} />
        </a>
        <CustomButton buttonText="Contact Us" backgroundColor='#f17a96' onClick={() => window.location.href = 'tel:8169203959'} />
      </div>

      {showMenu ? (
        <MenuOverlay
          navElements={
            (

              navItems.map((item, index) => (
                <CustomButton key={index} buttonText={item.title} backgroundColor={getButtonBackgroundColor(item.docElId)} onClick={() => scrollTo(item.docElId)} />
              ))
            )
          }
          handleModalShow={handleModalShow} showBookNow={window.innerWidth < 1100} navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <div style={{ height: '100%', display: 'flex', padding: 0, margin: 'auto 0', alignItems: 'center', gap: '10px' }}>
          {navItems.map((item, index) => (
            <CustomButton key={index} buttonText={item.title} backgroundColor={getButtonBackgroundColor(item.docElId)} onClick={() => scrollTo(item.docElId)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomNav;
