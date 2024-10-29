import React from 'react'

function About2() {
  return (
    <>
    <div className=' h-[90vh] w-full bg-[#080836] grid grid-rows-6'>
      
      <div class="custom-shape-divider-bottom-1730202969">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>


<div className=' row-span-2 grid justify-center items-center text-[25px] font-bold text-[white] '>  Who We Are</div>
      <div className='  row-span-4 grid grid-cols-2 gap-[25px]'>
        <div className='   flex justify-center text-center text-[18px] text-white ml-[150px]'>
          <p className=' flex text-left leading-[35px]'>

          e-lesson is an educational platform that helps students prepare for their exams and boosts their confidence with challenging questions. <br /> <br />
          Also it is a platform that uses technology to make education accessible, interactive and engaging for all categories of learners. <br /> <br /> As an educational technology platform, our primary focus is helping students and preparing them  academically and also  specifically crafted <br /> to help them achieve their goals. <br />

          Ensure our learners have a deep understanding of their strengths and weaknesses, which serves as a guide.
          


          </p>
        </div>
        <div className='   mr-[170px]  mt-[20px] bg-[url(./assets/pics4.jpg)] bg-cover bg-center mb-[30px] rounded-tr-[80px] rounded-bl-[80px] '></div>
      </div>

    </div>
    </>
  )
}

export default About2