
import { Routes, Route, useLocation, Router } from "react-router-dom";
import { useEffect } from "react";
import HomePage from './Pages/HomePage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import TeamPage from "./Pages/TeamPage.jsx";
import "./App.css"
import "./index.css"
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Events from "./components/Events/Events.jsx";

function ScrollToTop() {
  const { pathname } = useLocation()
console.log(pathname)
  useEffect(() => {
    document.querySelector('.app').scrollTo(0, 0);
  }, [pathname])

  return null
}

function App() {


  return (
    <div className="app">
      <div className="main">
      <Header/>
          <ScrollToTop />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/portfolio' element={<PortfolioPage/>}/>
      <Route path="/portfolio/:slug" element={<Projects />} />
      <Route path='/team' element={<TeamPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path="/blog/:slug" element={<Events />} />
    </Routes>
    <Footer/>
    </div>
 
    </div>
  )
}

export default App
