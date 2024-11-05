import React from 'react'
import video1 from '../assets/video1.mp4';

function Hero3() {
  return (
    <div className='min-h-[90vh] w-full bg-[#575454c5]'>
    <div className=' h-[20vh] w-full flex flex-col justify-center items-center text-white'>
      <h1 className=' text-[35px] font-bold text-[orangered]' >Pratice with our CBT Software</h1>
      <p className=' text-[25px] font-bold '>Pratice with e-lesson and succeed</p>
    </div>
    <div className='min-h-[60vh] w-full  flex justify-center items-center'>
      <video src={video1} autoPlay loop muted className='h-[50vh] ' />
    </div>
  </div>
  )
}

export default Hero3