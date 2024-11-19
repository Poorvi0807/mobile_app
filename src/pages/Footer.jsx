import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaBehance, FaEnvelope } from 'react-icons/fa';
import column from "../assets/column.png";
function Footer() {
  return (
    <>    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <div className="footer-logo">ui</div>
          <p>© 2024, Omega Orion Pvt. Ltd.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <a href="#explore">Explore</a>
            <a href="#faq">FAQ</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="footer-column">
            <a href="#licensing">Licensing</a>
            <a href="#terms">Terms of use</a>
            <a href="#privacy">Privacy policy</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <p>Join our monthly newsletter 🙌</p>
          <div className="newsletter-input">
            <input type="email" placeholder="designer@example.com" />
            <button type="submit">→</button>
          </div>
          <p>Connect with us 🤝</p>
          <div className="social-icons">
            <a href="#instagram"><FaInstagram /></a>
            <a href="#twitter"><FaTwitter /></a>
            <a href="#behance"><FaBehance /></a>
            <a href="#email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      
    </footer>
    <div>
        <img src={column} />
      </div>
      </>

  );
}

export default Footer;
