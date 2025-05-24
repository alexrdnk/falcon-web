import React from 'react'
import WelcomeLogo from '../../images/WelcomeLogo.svg'
import "./Welcome.scss"

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='welcome-header'><p className='welcome-title'>Wspólnie rozwijamy technologie z <span>FALCON</span>.</p><img src={WelcomeLogo} alt="Logo" /></div>
      
      <a href="https://wefim.pwr.edu.pl/studenci/aktywnosc-studencka/kola-naukowe/kn-falcon" target='_blank' className='welcome-btn'>Więcej o nas</a>
    </div>
  )
}

