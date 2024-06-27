import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollLevel, setScrollLevel] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);

    const threshold1 = 100;
    const threshold2 = 200;
    const threshold3 = 300;

    if (scrollY >= threshold3) {
      setScrollLevel(3);
    } else if (scrollY >= threshold2) {
      setScrollLevel(2);
    } else if (scrollY >= threshold1) {
      setScrollLevel(1);
    } else {
      setScrollLevel(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''} navbar-${scrollLevel}`}
    >
      <ul>
        <li>
          <a href="#Home">Home</a> 
        </li>
        <li>
          <a href="#About">About</a> 

        </li>
        <li>
          <a href="#My Services">Services</a>
        </li>
        <li>
          <a href="#Contact">Contact</a> 
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
