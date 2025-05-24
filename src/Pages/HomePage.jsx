import React from 'react'
import Welcome from '../components/Welcome/Welcome.jsx'
import BoxInfo from '../components/BoxInfo/BoxInfo.jsx'
import GlobalInfo from '../components/GlobalInfo/GlobalInfo.jsx'



export default function HomePage() {
  return (
    <div>
          <Welcome/>
          <BoxInfo/>
          <GlobalInfo/>
    </div>
  )
}
