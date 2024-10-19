import React, { useEffect, useState } from 'react';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import './header.scss';

const Header = () => {
  const [hamburgerPosition, setHamburgerPosition] = useState({ top: 20 }); // Initial top offset

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const headerRect = header.getBoundingClientRect();
      const scrollY = window.scrollY;

      if (scrollY < headerRect.bottom) {
        const newTop = scrollY - headerRect.top;
        // Stop the hamburger menu before the header's bottom edge
        setHamburgerPosition({ top: Math.min(newTop, headerRect.height - 60) }); // Adjust 40 based on the size of the hamburger icon
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='header'>
      <div
        className='hamburger'
        style={{ top: hamburgerPosition.top }}
      >
        <HamburgerMenu />
      </div>
      <h1>Welcome to Amazon Automotive Products</h1>
    </div>
  );
}

export default Header;
