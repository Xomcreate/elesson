import React from 'react';

function About2() {
  return (
    <>
      <div className='h-[90vh] w-full bg-[#080836] grid grid-rows-6 p-4 md:p-0'>
        <div className='row-span-2 flex justify-center items-center text-[20px] md:text-[25px] font-bold text-white'>
          Who We Are
        </div>
        
        <div className='row-span-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[25px]'>
          <div className='flex justify-center text-center text-[16px] md:text-[18px] text-white md:ml-[150px] p-4 md:p-0'>
            <p className='text-left leading-[28px] md:leading-[35px]'>
              e-lesson is an educational platform that helps students prepare for their exams and boosts their confidence with challenging questions. <br /><br />
              Also it is a platform that uses technology to make education accessible, interactive and engaging for all categories of learners. <br /><br />
              As an educational technology platform, our primary focus is helping students and preparing them academically and also specifically crafted to help them achieve their goals. <br /><br />
              Ensure our learners have a deep understanding of their strengths and weaknesses, which serves as a guide.
            </p>
          </div>
          
          <div className='md:mr-[170px] mt-[20px] bg-[url(./assets/students2.jpg)] bg-cover bg-center mb-[30px] rounded-tr-[40px] md:rounded-tr-[80px] rounded-bl-[40px] md:rounded-bl-[80px] h-[250px] md:h-auto'></div>
        </div>
      </div>
    </>
  );
}

export default About2;
