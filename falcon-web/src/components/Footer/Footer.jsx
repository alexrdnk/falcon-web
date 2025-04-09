import React from 'react'
import "./Footer.scss"
import FalconLogo from '../../images/Logo.svg'
import PwrLogo from './images/LogoPwr.png';
import FacebookIcon from './images/FacebookLogo.png';
import InstagramIcon from './images/InstagramLogo.png';
import LinkedInIcon from './images/LinkedInLogo.png';

export default function Footer() {
  return (


    <footer>

      <div className='footer-left'>

        <img src={FalconLogo} alt="logo"/>
        <p className='footer-text'>
        Jesteśmy interdyscyplinarnym kołem naukowym <span>FALCON</span>, działającym przy Politechnice Wrocławskiej. Tworzymy zespół studentów zafascynowanych projektowaniem dronów oraz nowoczesnymi technologiami.
        </p>
        <p className='footer-copyright'>© 2025 FALCON Team</p>
      </div>

      <div className='footer-right'>
      <img src={PwrLogo} alt="pwr-logo"/>
        <div className='footer-socials'>
          <a href="https://www.facebook.com/profile.php?id=61566193606858" target="_blank" rel="noopener noreferrer"> {/* Add actual links later */}
              <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/falcon.pwr/" target="_blank" rel="noopener noreferrer"> {/* Add actual links later */}
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/bohdan-stepanenko-219485285/" target="_blank" rel="noopener noreferrer"> {/* Add actual links later */}
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>

      </div>

    </footer>


  )
}
