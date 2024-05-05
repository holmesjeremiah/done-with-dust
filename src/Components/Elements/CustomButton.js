import React, { useState, useEffect } from 'react';

function CustomButton({
  buttonText = "Book Now",
  borderColor = 'white',
  backgroundColor = "#4d4d4d",
  color = 'white',
  onClick,
  scrollTo
}) {
  const [buttonWidth, setButtonWidth] = useState('150px');

  useEffect(() => {
    const handleResize = () => {
      // Update button width based on window width
      if (window.innerWidth < 576) { // Example breakpoint for small devices
        setButtonWidth('100px');
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) { // Medium devices
        setButtonWidth('120px');
      } else {
        setButtonWidth('150px'); // Default size for larger devices
      }
    };

    // Set initial size on mount
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures effect runs only on mount and unmount
  const scrollIntoView = (scrollTo) => {
    // Scroll to the target component
    console.log("scrollto" + scrollTo);
    const targetElement = document.getElementById(scrollTo);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
      <button
        style={{
         
          padding: '10px 0',
          border: `${borderColor} solid 3px`,
          borderRadius: '15px',
          backgroundColor: backgroundColor,
          color: color,
          width: buttonWidth, // Use state-controlled width
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
        }}
        onClick={(onClick) || (() => {
          if (scrollTo) {
            scrollIntoView(scrollTo)
          }
        })}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default CustomButton;
