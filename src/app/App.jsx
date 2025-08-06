
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PortfolioPage from "./pages/PortfolioPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import "./App.css"
import "../../public/index.css"
import Footer from "../components/Layouts/Footer/Footer.jsx";
import Header from "../components/Layouts/Header/Header.jsx";
import Projects from "../components/PortfolioPage/Projects/Projects.jsx";
import Events from "../components/BlogPage/Events/Events.jsx";

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
      <Route path='/team' element={<TeamPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path="/blog/:slug" element={<Events />} />
    </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
