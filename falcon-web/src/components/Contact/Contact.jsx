import React from 'react'
import './Contact.scss';
import FacebookIcon from './images/FacebookIcon.svg?react';
import InstagramIcon from './images/InstagramIcon.svg?react';
import LinkedInIcon from './images/LinkedInIcon.svg?react';


export default function Contact() {
  return (
    <div className="contact-section">
  <span className="blob blob--1" />
  <span className="blob blob--2" />
  <span className="blob blob--3" />

  <h2>Kontakt</h2>

  <div className="contact-grid">
    <form className="contact-form">
      <button className="contact-submit">Skontaktuj się</button>
      <input className="contact-input" type="email" placeholder="Twój adres email" />
      <textarea className="contact-textarea" placeholder="Wiadomość…" />
    </form>

    <div className="contact-info">
      <div>
        <p className='email-text'>Nasz email:</p>
        <a className="contact-email" href="mailto:kn.falcon@pwr.edu.pl">
          kn.falcon@pwr.edu.pl
        </a>
      </div>

      <div>
        <p className='social-text'>Nasze sociale:</p>
        <div className="social-list">
           <a href="https://www.facebook.com/profile.php?id=61566193606858" target="_blank" rel="noopener noreferrer"> {/* Add actual links later */}
                        <FacebookIcon/>
                    </a>
                    <a href="https://www.instagram.com/falcon.pwr/" target="_blank" rel="noopener noreferrer"> {/* Add actual links later */}
                      <InstagramIcon/>
                    </a>
                    <a href="https://www.linkedin.com/in/bohdan-stepanenko-219485285/" target="_blank" rel="noopener noreferrer"> {/* Add actual links later */}
                      <LinkedInIcon/>
                    </a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
