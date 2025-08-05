import React from 'react'
import "./Footer.scss"
import FalconLogoText from '../../images/Logo.svg?react'
import FalconLogo from '../../images/Logo2.svg?react'
import PWRLogo from './images/PWRLogo.svg?react';
import FacebookIcon from './images/FacebookIcon.svg?react';
import InstagramIcon from './images/InstagramIcon.svg?react';
import LinkedInIcon from './images/LinkedInIcon.svg?react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-left">
            <div className="footer-logo">
              <div className="logo-wrapper">
                <FalconLogo className="logo-icon" />
                <FalconLogoText className="logo-text" />
              </div>
              <p className="footer-description">
                Jesteśmy interdyscyplinarnym kołem naukowym <span className="highlight">FALCON</span>, 
                działającym przy Politechnice Wrocławskiej. Tworzymy zespół studentów zafascynowanych 
                projektowaniem dronów oraz nowoczesnymi technologiami.
              </p>
            </div>
            
            <div className="footer-info">
              <div className="info-item">
                <span className="info-label">Email:</span>
                <a href="mailto:kn.falcon@pwr.edu.pl" className="info-link">
                  kn.falcon@pwr.edu.pl
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Lokalizacja:</span>
                <span className="info-text">Politechnika Wrocławska</span>
              </div>
            </div>
          </div>

          <div className="footer-section footer-center">
            <div className="footer-links">
              <h3 className="links-title">Nawigacja</h3>
              <ul className="links-list">
                <li><a href="/" className="footer-link">O nas</a></li>
                <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
                <li><a href="/team" className="footer-link">Team</a></li>
                <li><a href="/blog" className="footer-link">Blog</a></li>
                <li><a href="/contact" className="footer-link">Kontakt</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-section footer-right">
            <div className="footer-partners">
              <h3 className="partners-title">Uczelnia</h3>
              <div className="partner-logo">
                <PWRLogo className="pwr-logo" />
                <span className="partner-name">Politechnika Wrocławska</span>
              </div>
            </div>
            
            <div className="footer-socials">
              <h3 className="socials-title">Śledź nas</h3>
              <div className="social-links">
                <a 
                  href="https://www.facebook.com/profile.php?id=61566193606858" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FacebookIcon />
                  <span className="social-name">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/falcon.pwr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <InstagramIcon />
                  <span className="social-name">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/kn-falcon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <LinkedInIcon />
                  <span className="social-name">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>© 2025 FALCON Team. Wszystkie prawa zastrzeżone.</p>
            <p className="copyright-subtitle">Tworzone z pasją do innowacji</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
