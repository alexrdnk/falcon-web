
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage.jsx'
import ContactPage from './Pages/ContactPage.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    </>
  )
}

export default App
