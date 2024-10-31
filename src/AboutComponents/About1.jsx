import React from 'react'

function About1() {
  return (
    <>
    <div className=' h-[80vh] w-full  bg-center bg-cover bg-[url(./assets/pics3.jpg)] grid grid-cols-2' >
      <div className='  grid'>
        <div className='  grid grid-rows-3 bg-[#8080807c] mt  ml-[90px] rounded-sm'>
        <div className='  flex flex-col justify-center text-left pt-[70px]  pl-[120px] '>
        <h1 className=' text-[35px] font-bold font text-[orangered]'> Our Purpose </h1>
        <p className=' text-[23px] font-bold text-white'>"A platform that help's students"</p>
      </div>
      <div className='  flex flex-col justify-center text-left  pl-[120px] '>
      <h1 className=' text-[35px] font-bold font  text-[orangered]'> Our Vision </h1>
      <p className=' text-[20px] font-bold text-white'>"To revolutionize students assessments, <br />
          through a secure, scalable technology <br />
             and empowering students track their progress, identify gaps and achieve academic success "</p></div> 
      <div className='  flex flex-col justify-center text-left pb-[40px] pl-[120px] '>
        <h1 className=' text-[35px] font-bold font text-[orangered]'>Our Mission</h1>
        <p className=' text-[20px] font-bold text-white'>"Continuous innovation in upskilling on a <br />
        mass scale."</p>
      </div>
        </div>
      
      </div>
     
  
    </div>
    </>
  )
}

export default About1