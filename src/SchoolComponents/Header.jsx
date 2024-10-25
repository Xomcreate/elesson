import React, { useState } from 'react';
import { FaEdgeLegacy } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To track active route

  // Framer Motion animation for the mobile menu
  const menuVariants = {
    open: { 
      opacity: 1, 
      height: "auto", 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      } 
    },
    closed: { 
      opacity: 0, 
      height: 0, 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      } 
    },
  };

  // Stagger effect for menu items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className='bg-gradient-to-r from-[#4141da] to-[#3b82f6] w-full h-[10vh] flex justify-between items-center px-4 shadow-lg'>
        {/* Logo Section */}
        <div className='flex ml-[40px] items-center text-white text-[25px] font-bold'>  
          <FaEdgeLegacy className='text-[orangered] text-[25px] animate-pulse' /><p>-School</p> 
        </div>

        {/* Menu for larger screens */}
        <div className='hidden md:flex space-x-8 text-white'>
          <ul className='flex gap-[20px] items-center'>
            <li className={`flex text-[17px] font-bold ${location.pathname === '/' ? 'text-[orangered]' : 'hover:text-yellow-400'} transition-all duration-300`}>
              <Link to='/'>Home</Link>
            </li>
            <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/about' ? 'text-[orangered]' : ''}`}>
              <Link to='/about'>About</Link>
            </li>
            <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/cbt' ? 'text-[orangered]' : ''}`}>
              <Link to='/cbt'>CBT Questions</Link>
            </li>
            <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/past' ? 'text-[orangered]' : ''}`}>
              <Link to='/past'>Past Questions</Link>
            </li>
            <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/blog' ? 'text-[orangered]' : ''}`}>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className='hover:text-yellow-400 transition-all duration-300'>FAQ</li>
            <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/contact' ? 'text-[orangered]' : ''}`}>
              <Link to='/contact'>Contacts</Link>
            </li>
          </ul>
        </div>

        {/* Buttons Section for larger screens */}
        <div className='hidden md:flex gap-4'>
          <button className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[8vw] rounded-lg hover:bg-yellow-400 transition-all duration-300'>
            Register
          </button>
          <button className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[8vw] rounded-lg hover:bg-yellow-400 transition-all duration-300'>
            Login
          </button>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className='md:hidden text-white'>
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            whileTap={{ scale: 0.9 }} // Animation on click
            className='focus:outline-none'
          >
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </motion.button>
        </div>
      </div>

      {/* Collapsible Mobile Menu */}
      <motion.div
        className='md:hidden bg-[#4141da] text-white overflow-hidden'
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul className='flex flex-col items-center gap-[20px] py-4'>
          {['/', '/about', '/cbt', '/past', '/blog', '/contact'].map((path, index) => (
            <motion.li 
              key={path} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className={`text-[17px] font-bold ${location.pathname === path ? 'text-[orangered]' : 'hover:text-yellow-400'} transition-all duration-300`}
            >
              <Link to={path} onClick={() => setIsOpen(false)}>
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </Link>
            </motion.li>
          ))}
          <motion.li 
            className='w-full flex justify-center'
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <button className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[60vw] rounded-lg hover:bg-yellow-400 transition-all duration-300'>
              Register
            </button>
          </motion.li>
          <motion.li 
            className='w-full flex justify-center'
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            <button className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[60vw] rounded-lg hover:bg-yellow-400 transition-all duration-300'>
              Login
            </button>
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
}

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 33bcb9223eb655b1e5f294c50957f63a7f4c492b
