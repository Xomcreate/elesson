import React from 'react'

function Hero2() {
  return (
    <div className=' w-full h-[70vh]  bg-[#080836] flex flex-col'>
       <div className=' h-[25%] flex justify-center items-center'>
        <h1 className=' text-[white] text-[40px] font-semibold'>Get Started. Get Results.</h1>
       </div>
       {/* section-two  */}
       <div className=' h-[75%] flex flex-row '>
        <div className=' w-[50%] flex items-center flex-col gap-[10px] justify-center'>
            <div className=' flex bg-[url(./assets/exams.png)] bg-cover bg-center h-[50%] w-[40%]'></div>
            <div className='flex '>
                <h1 className='text-[orangered] font-bold text-[25px]'>Prepare You for Exam</h1>
            </div>
            <div className='flex'>
                <h3 className=' text-[white] font-serif'>We are to build soild trust in our clients</h3>
            </div>
        </div>
       <div className='  w-[50%] flex items-center flex-col gap-[10px] justify-center'>
       <div className=' flex bg-[url(./assets/get.png)] bb bg-center h-[50%] w-[40%]'></div>
            <div className='flex '>
                <h1 className='text-[orangered] font-bold text-[25px]'>Boost Your Intelligence</h1>
            </div>
            <div className='flex'>
                <h3 className=' text-[white] font-serif'>We are to build soild trust in our clients</h3>
            </div>
       </div>
      
       </div>
       <div></div>
    </div>
  )
}

export default Hero2
