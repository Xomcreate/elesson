import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './SchoolComponents/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Hero from './SchoolComponents/Hero'
import About from './SchoolComponents/About'
import Pastquestions from './SchoolComponents/Pastquestions'
import Cbtquestions from './SchoolComponents/Cbtquestions'
import Contactus from './SchoolComponents/Contactus'
import Blog from './SchoolComponents/Blog'
<<<<<<< HEAD
import Footer from './SchoolComponents/Footer'

=======
import Login from './SchoolComponents/Login'
import Register from './SchoolComponents/Register'
>>>>>>> 33bcb9223eb655b1e5f294c50957f63a7f4c492b




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
      < Routes>
      <Route path='/' element= {<Hero/>} />
      <Route path='/about' element= {<About/>} />
      <Route path='/cbt' element= {<Cbtquestions/>} />
      <Route path='/blog' element= {<Blog/>} />
      <Route path='/past' element= {<Pastquestions/>} />
      <Route path='/contact' element= {<Contactus/>} />   
      </Routes>
    </BrowserRouter>
<<<<<<< HEAD
    <Footer/>
    
=======
    <Register/>
    <Login/>
>>>>>>> 33bcb9223eb655b1e5f294c50957f63a7f4c492b
  </StrictMode>,
)
