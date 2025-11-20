import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-links">
            <div className="footer-column">
              <h4>Udemy Business</h4>
              <a href="#">Teach on Udemy</a>
              <a href="#">Get the app</a>
              <a href="#">About us</a>
              <a href="#">Contact us</a>
            </div>
            <div className="footer-column">
              <h4>Careers</h4>
              <a href="#">Blog</a>
              <a href="#">Help and Support</a>
              <a href="#">Affiliate</a>
              <a href="#">Investors</a>
            </div>
            <div className="footer-column">
              <h4>Terms</h4>
              <a href="#">Privacy policy</a>
              <a href="#">Cookie settings</a>
              <a href="#">Sitemap</a>
              <a href="#">Accessibility statement</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="#" className="footer-logo">
            udemy
          </a>
          <div className="copyright">© 2023 Udemy, Inc.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
