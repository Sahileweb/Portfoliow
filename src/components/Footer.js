export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <a className="footer-logo" href="#home">Sahil Mundhe</a>
        <p className="footer-copy">© 2025 Sahil Mundhe. All Rights Reserved.</p>
        <div className="footer-socials">
          <a className="fsocial" href="https://github.com/Sahileweb"
             target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a className="fsocial" href="https://linkedin.com"
             target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a className="fsocial" href="mailto:sahil2003mundhe@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}
