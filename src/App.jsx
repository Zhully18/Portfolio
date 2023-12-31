import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Theme from './Components/Theme/Theme'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
function App() {


  return (
    <>
     <BrowserRouter>
        <Navbar />
        <Theme />
        <Routes>
          <Route index element={ <Home /> }/>
          <Route path='about' element={ <About /> }/>
          <Route path='portfolio' element={ <Portfolio /> }/>
          <Route path='contact' element={ <Contact /> }/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
