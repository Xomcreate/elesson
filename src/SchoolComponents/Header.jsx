import React from 'react'
import { FaEdgeLegacy } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <div className=' bg-[#4141da] w-full h-[10vh] grid grid-cols-6'>
        <div className='  col-span-1 flex justify-center items-center text-[white] text-[25px] font-bold' ><FaEdgeLegacy className=' text-[orangered] text-[30px] '/>-School</div>
        <div className=' flex justify-center text-[15px] col-span-4 ml-[100px]'>
    <ul className=' flex gap-[40px] text-[white]  items-center'>
        <li className='flex underline text-[orangered] font-bold text-[17px]'><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/cbt'>CBT Questions</Link></li>
        <li><Link to= '/past'>Past Questions</Link></li>
        <li><Link to= '/blog'>Blog</Link></li>
         <li>FAQ</li>
        <li><Link to='/contact'>Contacts</Link></li>
    </ul>
        </div>
        <div className='  col-span-1  flex justify-center items-center gap-[10px] mr-[20px] '>
           <button className=' bg-[orangered] text-white text-[15px] h-[4vh] w-[8vw] rounded-lg'>Register</button>
           <button className=' bg-[orangered] text-white text-[15px] h-[4vh] w-[8vw] rounded-lg'>login</button>

        </div>
    </div> 
    </>
  )
}

export default Header