import React from 'react'
import backgroundImage from '../../images/img.png'
import "./Welcome.scss"

export default function Welcome() {
  return (
    <div className='welcome' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='welcome-overlay'>
        <div className='welcome-content'>
          <div className='welcome-header'>
            <p className='welcome-title'>Wspólnie rozwijamy technologie z <span>FALCON</span>.</p>
          </div>
          
          <a href="https://wefim.pwr.edu.pl/studenci/aktywnosc-studencka/kola-naukowe/kn-falcon" target='_blank' className='welcome-btn'>Więcej o nas</a>
        </div>
      </div>
    </div>
  )
}

