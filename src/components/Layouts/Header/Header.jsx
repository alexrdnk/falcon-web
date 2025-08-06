import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Header/images/Logo2.svg';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-section" onClick={closeMobileMenu}>
          <div className="logo-wrapper">
            <img src={Logo} alt="Logo" className="logo-icon" />
          </div>
        </Link>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Strona główna
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/portfolio" 
                className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/team" 
                className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Zespół
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/blog" 
                className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="contact-button" onClick={closeMobileMenu}>
            <span>Skontaktuj się</span>
            <div className="button-glow"></div>
          </Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Strona główna
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={closeMobileMenu}>
                Zespół
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
