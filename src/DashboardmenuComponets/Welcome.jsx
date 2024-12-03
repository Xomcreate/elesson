import React from 'react';

function Welcome() {
  return (
    <> 
      <div className="bg-[#f5e9d3] grid h-[100vh] border border-black grid-rows-5 gap-[10px]">
        {/* Image Section */}
        <div className="row-span-2 grid justify-center mt-[20px] rounded-[40px] items-center bg-center bg-contain bg-no-repeat bg-[url(./assets/myguy.jpg)]"></div>

        {/* Welcome Text Section */}
        <div className="row-span-3 flex flex-col justify-start mt-[30px]">
          <h1 className="text-[orangered] font-serif text-[40px] text-center">WELCOME, XOM</h1>
          <p className="text-white text-center">"Your Journey to success starts here"</p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
