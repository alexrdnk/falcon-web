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


    <footer>
      <div class="footer-wrap">

      <div className='footer-left'>

        <div className='logo-section'><FalconLogo/><FalconLogoText/></div>
        <p className='footer-text'>
        Jesteśmy interdyscyplinarnym kołem naukowym <span>FALCON</span>, działającym przy Politechnice Wrocławskiej. Tworzymy zespół studentów zafascynowanych projektowaniem dronów oraz nowoczesnymi technologiami.
        </p>
        <p className='footer-copyright'>© 2025 FALCON Team</p>
      </div>

      <div className='footer-right'>
      <PWRLogo className="pwrlogo"/>
        <div className='footer-socials'>
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
    </footer>


  )
}
