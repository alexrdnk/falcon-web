import React from 'react'
import FalconLogoText from '../../images/Logo.svg?react'
import FalconLogo from '../../images/Logo2.svg?react'
import {Link} from "react-router-dom"

import "./Header.scss"

export default function Header() {
  return (
    <div className='header'>
      <div className='header-wrap'>
      <Link to="/"><div className='logo-section'><FalconLogo/> <FalconLogoText/></div></Link>
      <div className='header-btns'>
      <ul className="header-list">
        <Link to="/" className="header-list-item"><li>O nas</li></Link>
        <Link to="/portfolio" className="header-list-item"><li>Portfolio</li></Link>
        <Link to="/" className="header-list-item"><li>Team</li></Link>
        <a href="#" className="header-list-item"><li>Blog</li></a>
      </ul>
        <Link to="/contact" className='header-contact'>Kontakt</Link>
      </div>
      </div>
    </div>

  )
}
