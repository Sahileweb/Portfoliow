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
        <li><a href="#home" className="active" onClick={closeMenu}><i className="fa-solid fa-house nav-icon"></i>Home</a></li>
        <li><a href="#about" onClick={closeMenu}><i className="fa-regular fa-user nav-icon"></i>About</a></li>
        <li><a href="#skills" onClick={closeMenu}><i className="fa-solid fa-code nav-icon"></i>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}><i className="fa-solid fa-briefcase nav-icon"></i>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}><i className="fa-regular fa-envelope nav-icon"></i>Contact</a></li>
      <li>
      <a 
        href="resume 3 P.pdf"
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
