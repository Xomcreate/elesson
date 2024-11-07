import React from 'react'
import { FaEdgeLegacy } from "react-icons/fa6";

function Hero1() {
  return (
    <div className=' w-full h-[80vh] bg-[url(./assets/hero.jpg)] bg-cover bg-center grid '>
     
      {/* section-two */}
      <div className=' bg-[#ffffff85] flex justify-center  items-center  '>  
        <div className='  gap-[10px] flex justify-center w-[85%] h-[70%]  flex-col'>
          <h1 className=' text-[30px] font-bold text-[orangered] pl-[10px] flex items-center flex-row'> <FaEdgeLegacy className='text-[orangered] text-[35px] animate-pulse' /><p className=' text-white'>-lesson</p> </h1>
          <p className=' pl-[15px] text-white text-[20px] font'>is an educational platform that helps students prepare for their exams and boosts <br /> their confidence  with challenging questions.</p>
          <button className=' ml-[15px] rounded-lg flex bg-[orangered] h-[40px] justify-center items-center text-white w-[130px]'>Read More</button>
        </div>
       
      </div>
    </div>
  )
}

export default Hero1