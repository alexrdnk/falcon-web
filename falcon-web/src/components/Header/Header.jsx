import React from 'react'
import FalconLogo from '../../images/Logo.svg'

import "./Header.scss"

export default function Header() {
  return (
    <header>
      <img src={FalconLogo} alt="logo"/>
      <div className='header-btns'>
      <ul className="header-list">
        <a href="#" className="header-list-item"><li>O nas</li></a>
        <a href="#" className="header-list-item"><li>Portfolio</li></a>
        <a href="#" className="header-list-item"><li>Blog</li></a>
      </ul>
        <a href='#' className='header-contact'>Kontakt</a>
      </div>
    </header>

  )
}
