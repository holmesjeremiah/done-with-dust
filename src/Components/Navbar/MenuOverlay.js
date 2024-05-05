import React, { useState, useEffect, useRef } from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import CustomButton from '../Elements/CustomButton';

const MenuOverlay = ({ navItems, navElements }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();

        if (
          !menuRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      {
        isOpen ?
          (
            <a onClick={toggleMenu}>
              <RiCloseCircleLine style={{ margin: '0 20px', color: '#f17a96', fontSize: '50px' }} />
            </a>
          )
          : (
            <a onClick={toggleMenu}>
              <img style={{ padding: '0 20px' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxUlEQVR4nO1ZTYgUVxB+JhoJelATc1Ah4NGrGkkgHhVJyMWfi0EFUTzoQUTtqgU7BgwBEbNMV42/KEogGRMPehfFsxfRk4JolHU17lbNskYj2FIzk503szPbuzvdMw6ZDwaGmX71ql699+qrr53roYceWkYchh9oH30lwChAlwX4jiIPCfAbQfq38v2OAv0hSKBBtMrGuE5jqC/6XIF/FuQnihxP8fOXAv80ivnFbXd8JOTPFDhfWd24lY8gv1JgkvD0grY4r8jrBOlpA2eGFLhQBNquwYkvJeClA/uOzol3npxVDE9+KgEvV6QtAnRWkAfGBQL0XCC/KTPH4zCcKci/CNLbmsmBbw0jr483Fj6cii0N+FtBvj5+ISiy/1MPYBiiHXUr9ticSCOjinyv1jZfifce+9iliWGINnjOX9Yg90latgfDaK4gXRgXRNqZEOS1EtCaVI16EKBDtduTcq7bIHVBWOZdt0GQL3rX7DMJeL7rJgyG0VwFut/VW0nLt9NYsRvdn1vkug0CfMOrD0dSNW48RoD+aZlKgNlo7JzVGS+Ah5MigMZJFPg3Rfp1ODw+r9EzsYtnKPBIq85rtZqPNK/+VdoimP8iOQDkg96A3c2es1XLOgMGAT7nnYWDLgmK9Ht1gmib6zA04K1ewJcSBwjS3WrEJ1a0xcsJYD549OJ28gCgwf8GGO93HUYR+hf6lDtxQKnBqAyI9/TPbvacIh8W5JdZn4F4T/9svx4kBwD0eiyAsPDRBAEMZX0LTSsABXoxZngCyqxAP7QjA0V/CyE/SwygoiiUBwS83HXdIUb+06t+W1yHoRht87ZaIXFASbeppvdsW7ycAIJ03stA4JJgopO35waatXWpcSHkl3aeGs1hioZ/rU+qLpVUNhOdqtvom+y5EL1ovJj8nbd9Hk1azbPV9VboeqZcCJtnQIBvTotOm9znFzRrLlyboR6VNl/+PtC/ZGoGgMkL4J61ea6dLSXSg5ZaSitixj2qq0AXMvG2Acr9yNhNODht3dS0yrqqechlDAX6sXbOFvVS0yrbFYT05TfXHnKKWjZaauuAr9TdHBezOBOCfMbbsletDqRi2ITW+iAquk2qt1MR8ssU+Zoin0pd3C1J4kC58WySb9iVl4kkngVMq/TLu5fyp6UGPOCtVvLtpYb1E8bnyy84aKUCfV/si1a7TkMCnm/ZqCt2k6y89LYI/LV7HzC6P7fISrzxlCkFksKLkVRhJMtEJ6O7Jn1Y42EEzdpTy1L5/Zf9xgVB2mVkMF0Peujh/4t3X7qE8ty/3m4AAAAASUVORK5CYII=" alt="Side Menu Button" />
            </a>
          )
      }


      <div
        style={{
          position: 'fixed',
          top: '100px',
          right: isOpen ? '0' : '-300px',
          width: '250px',
          backgroundColor: '#242424',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          transition: 'right 0.3s ease',
          padding: '25px',
          borderRadius: '0 0 0 25px'
        }}
      >
        <h2 style={{ color: '#f17a96' }}>Menu</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

          {navElements}
        </div>


      </div>
    </div>
  );
};

export default MenuOverlay;
