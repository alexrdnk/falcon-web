import React from 'react'
import Header from '../components/Header/Header.jsx'
import Welcome from '../components/Welcome/Welcome.jsx'
import BoxInfo from '../components/BoxInfo/BoxInfo.jsx'
import GlobalInfo from '../components/GlobalInfo/GlobalInfo.jsx'
import Footer from '../components/Footer/Footer.jsx'


export default function HomePage() {
  return (
    <div>
          <Header/>
          <Welcome/>
          <BoxInfo/>
          <GlobalInfo/>
          <Footer/>
    </div>
  )
}
