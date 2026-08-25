'use client';
import { useState } from 'react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/closed
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <a className="nav-logo" href="#home">
        Sahil
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={closeMenu} >Home</a></li>
        <li ><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      <li>
      <a 
        href="Resume L.pdf"
        className="nav-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      </li>
       </ul>
    </nav>
  );
}
