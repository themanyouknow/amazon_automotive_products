import React, { useState } from 'react';
import './hamburgerMenu.scss';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? '' : '☰'} 
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-content">
                    <button className="close-btn" onClick={toggleMenu}>×</button>
                    <ul>
                        <li onClick={toggleMenu}><Link to="/home">Home</Link></li>
                        <li onClick={toggleMenu}><Link to="/about">About</Link></li>
                        <li onClick={toggleMenu}><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
