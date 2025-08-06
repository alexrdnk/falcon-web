import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactSection.scss';

const ContactSection = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const contactFeatures = [
    {
      id: 1,
      icon: "💬",
      title: "Szybka komunikacja",
      description: "Odpowiadamy w ciągu 24h"
    },
    {
      id: 2,
      icon: "🤝",
      title: "Współpraca",
      description: "Otwarci na nowe projekty"
    },
    {
      id: 3,
      icon: "🚀",
      title: "Innowacje",
      description: "Najnowsze technologie"
    }
  ];

  return (
    <div className="contact-section-homepage">
      <div className="contact-container">
        {/* Floating elements background */}
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-square square-1"></div>
          <div className="floating-square square-2"></div>
        </div>

        <div className="contact-content">
          <div className="contact-header">
            <div className="header-glow">
              <h2>Gotowi na osiągnięcia?</h2>
              <div className="subtitle-container">
                <p className="subtitle">Dołącz do naszego koła naukowego</p>
                <div className="pulse-dot"></div>
              </div>
            </div>
          </div>

          <div className="contact-features">
            {contactFeatures.map((feature, index) => (
              <div 
                key={feature.id} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="feature-icon">
                  <span className="emoji">{feature.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-cta">
            <div 
              className="contact-button-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button 
                className="contact-button" 
                onClick={handleContactClick}
              >
                <span className="button-text">Skontaktuj się z nami</span>
                <div className="button-glow"></div>
                <div className="button-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <svg className="button-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isHovered && (
                <div className="hover-effect">
                  <div className="ripple-effect"></div>
                  <div className="ripple-effect delay-1"></div>
                  <div className="ripple-effect delay-2"></div>
                </div>
              )}
            </div>
            
            <div className="contact-info">
              <p className="info-text">Masz pytania? Chcesz dołączyć do naszego zespołu?</p>
              <p className="info-subtext">Nie wahaj się - napisz do nas!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 