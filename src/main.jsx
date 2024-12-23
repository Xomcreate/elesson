// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './SchoolComponents/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './SchoolComponents/Hero';
import About from './SchoolComponents/About';
import Pastquestions from './SchoolComponents/Pastquestions';
import Cbtquestions from './SchoolComponents/Cbtquestions';
import Contactus from './SchoolComponents/Contactus';
import Footer from './SchoolComponents/Footer';
import Register from './SchoolComponents/Register';
import Admin from './DashboardComponents/Admin';
import User from './DashboardComponents/User';



 // Import Register

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/About' element={<About />} />
        <Route path='/CBT Exam' element={<Cbtquestions />} />
        <Route path='/Past Questions' element={<Pastquestions />} />
        <Route path='/Contact' element={<Contactus />} />
        <Route path='/Register' element={<Register />} /> {/* Register route */}
        <Route path='/codecraft' element={<Admin />} />
        <Route path='/user' element={<User />} /> {/* Register route */}
        
        


      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
