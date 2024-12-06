import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <> 
      <div className="bg-[white] grid h-[100vh] grid-rows-5 gap-[10px]">
        {/* Image Section */}
        <div className="row-span-2 grid justify-center mt-[20px] rounded-[40px] items-center bg-center bg-contain bg-no-repeat bg-[url(./assets/myguy.jpg)]"></div>

        {/* Welcome Text Section */}
        <div className="row-span-3 flex flex-col justify-start mt-[30px]">
          <h1 className="text-[orangered] font-serif text-[40px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center">
            WELCOME, DEX
          </h1>
          <p className="text-[black] text-[25px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-serif text-center">
            "Your Journey to success starts here"
          </p>
          <p className="text-center text-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[black] font-serif">
            Let's Get Started
          </p>
          <div className="text-center flex flex-row gap-[20px] mt-[60px] justify-center items-center flex-wrap">
            {/* Past Questions Button */}
            <button
              className="bg-[orangered] h-[6vh] sm:h-[18vh] md:h-[7vh] lg:h-[6vh] w-[20vw] sm:w-[30vw] md:w-[20vw] lg:w-[10vw] font-bold text-white rounded-lg"
              onClick={() => navigate('/Past Questions')} // Navigate to Past Questions page
            >
              Past Questions
            </button>
            {/* CBT Exam Button */}
            <button
              className="bg-[orangered] h-[6vh] sm:h-[18vh] md:h-[7vh] lg:h-[6vh] w-[20vw] sm:w-[30vw] md:w-[20vw] lg:w-[10vw] font-bold text-white rounded-lg"
              onClick={() => navigate('/CBT Exam')} // Navigate to CBT Exam page
            >
              CBT Exam
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;