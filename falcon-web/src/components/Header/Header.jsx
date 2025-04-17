import React from 'react'
import FalconLogo from '../../images/Logo.svg'
import {Link} from "react-router-dom"

import "./Header.scss"

export default function Header() {
  return (
    <div className='header'>
      <div className='header-wrap'>
      <img src={FalconLogo} alt="logo"/>
      <div className='header-btns'>
      <ul className="header-list">
        <Link to="/" className="header-list-item"><li>O nas</li></Link>
        <a href="#" className="header-list-item"><li>Portfolio</li></a>
        <a href="#" className="header-list-item"><li>Blog</li></a>
      </ul>
        <Link to="/contact" className='header-contact'>Kontakt</Link>
      </div>
      </div>
    </div>

  )
}
