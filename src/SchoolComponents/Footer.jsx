import React from 'react'
import { FaLaptop } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaInfo } from "react-icons/fa";






function Footer() {
  return (
    <div className=' bg-[#4141da] h-[50vh] w-[100vw] grid grid-cols-3'>
        <div className='  flex flex-col pt-[50px] '>
        <h1 className='flex justify-center items-center font-bold text-[20px] text-[white] gap-[10px] '><FaInfo className=' text-[20px]  text-[orangered] ' />Our Services</h1><br />
        <div className=' flex justify-center' >
          <ul className='  list-disc text-white'>
            <li > <a href="http://localhost:5173/contact">Contacts</a></li>
            <li>Login</li>
            <li><a href="http://localhost:5173/cbt">CBT Questions</a></li>
             <li><a href="http://localhost:5173/past">Past Questions</a></li>
             <li><a href="http://localhost:5173/blog">Blog</a></li>
          </ul>
        </div>
        </div>
        <div className='  flex flex-col pt-[50px] '> 
            <h1 className=' flex justify-center items-center font-bold text-[20px] text-[white] gap-[10px]' ><IoMdContact className=' text-[25px]  text-[orangered] '  />Contacts</h1> <br />
            <p className=' flex '></p>
            <div className=' ml-[165px] flex  '>
                <ul className=' flex gap-[10px] flex-col'>
                    <li className=' flex gap-[10px] items-center text-white'><FaPhoneAlt className='   hover:text-blue-500 transition duration-300 text-[12px] text-[white]' />09018115555, 09076084515</li>
                    <li className=' flex gap-[10px] items-center text-white'><FaWhatsapp className=' text-[white]  hover:text-blue-500 transition duration-300 bg-[green] text-[15px] font-bold ' />09076084515</li>
                    <li className=' flex gap-[10px] items-center text-white text-[15px]'>
                    <a
            href="https://github.com/Xomcreate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition duration-300"
          >
            <FaGithub className='  text-[15px] text-[white]' />
          </a>
          Kings & Prisca
                    </li>
                    <li className=' flex gap-[10px] items-center text-[15px] text-white'>
                      <a
            href="https://www.linkedin.com/in/david-igboanusi-757a66270/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin className='  text-[15px] text-[white]' />
          </a>
          Kings & Prisca
                    </li>
          
                </ul>
            </div>
           <div className='  flex mt-[70px] justify-center'><p className=' text-[13px] text-white'> © 2024 All rights reserved | Developed by Kings & Prisca</p></div>
        </div>
        <div className='  flex flex-col pt-[50px]'> 
            <h1 className='flex justify-center items-center font-bold text-[20px] text-[white] gap-[10px] '><FaLaptop className=' text-[25px] text-[orangered]' />About Us</h1><br />
            <p className=' text-white flex justify-center text-center '>e-lesson is an educational platform that helps student's  <br />  prepare for their awaiting examination and <br /> give them the confidence they need <br /> to carry out challenging questions </p>
        </div>

    </div>
  )
}

export default Footer