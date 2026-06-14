'use client';
export default function Header() {
  return (
    <nav>
      <a className="nav-logo" href="#home">
        Sahil
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li className="hide-sm"><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a 
        href="RESUME (updated) sync,clause.pdf"
        className="nav-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </nav>
  );
}
