import * as React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import socialFb from '../images/social-fb.svg';
import socialIg from '../images/social-ig.svg';
import socialTw from '../images/social-tw.svg';
import socialYt from '../images/social-yt.svg';

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__content">
            <Link className="footer__logo" to="/">
              <img src={logo} alt="Logo"/>
            </Link>

            <ul className="footer__links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            </ul>

            <ul className="footer__socials">
              <li><a href="https://example.com/" target="_blank" rel="noreferrer"><img src={socialFb} alt="Facebook"/></a></li>
              <li><a href="https://example.com/" target="_blank" rel="noreferrer"><img src={socialTw} alt="Twitter"/></a></li>
              <li><a href="https://example.com/" target="_blank" rel="noreferrer"><img src={socialYt} alt="Youtube"/></a></li>
              <li><a href="https://example.com/" target="_blank" rel="noreferrer"><img src={socialIg} alt="Instagram"/></a></li>
            </ul>
          </div>
          <p className="footer__copyright">©2022 All rights reserved. Powered by Atla</p>
        </div>
      </div>
    </footer>
  );
}
