
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import "./App.css"
import "./index.css"
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <div className="app">
      <Header/>
      <div class="main">
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/portfolio' element={<PortfolioPage/>}/>
      <Route path="/portfolio/:slug" element={<Projects />} />
    </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
