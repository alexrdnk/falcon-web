import React from 'react'
import C16 from './images/c16.png'
import Tick from "./images/tick.svg";

import './GlobalInfo.scss'

export default function GlobalInfo() {
  return (
    <div className='global-info'>
      <img src={C16} alt="c16"/>

      <div className='global-info-text'>
        <h1 class="global-info-title">Co zyskasz, dołączając do nas?</h1>
        <ul class="global-info-list">
            <li class="global-info-list-item"><img src={Tick} alt="tick"/>Pracę nad zaawansowanymi projektami dronowymi</li>
            <li class="global-info-list-item"><img src={Tick} alt="tick"/>Dostęp do nowoczesnego sprzętu i wsparcie</li>
            <li class="global-info-list-item"><img src={Tick} alt="tick"/>Możliwość udziału w konferencjach i warsztatach</li>
            <li class="global-info-list-item"><img src={Tick} alt="tick"/>Świetną atmosferę i współpracę z pasjonatami</li>
        </ul>

      </div>
    </div>
  )
}
