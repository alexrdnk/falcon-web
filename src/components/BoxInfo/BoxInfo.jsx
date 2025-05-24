import React from 'react'
import User from './images/user.png'
import Server from './images/Server.png'
import Location from './images/location.png'

import './BoxInfo.scss'

export default function BoxInfo() {
  return (
    <div className="boxinfo">
  <ul className="box-info-list">
    <li className="box-info-list-item">
      <img src={User} alt="user" />
      <div>
      <span>30+</span>
      <p>Studentów</p>
     </div>
    </li>
    <li className="box-info-list-item">
      <img src={Location} alt="location" />
      <div>
      <span>C16</span>
      <p>PWr</p>
      </div>
    </li>
    <li className="box-info-list-item">
      <img src={Server} alt="server" />
      <div>
      <span>5+</span>
      <p>Projektów</p>
      </div>
    </li>
  </ul>
</div>

  )
}
