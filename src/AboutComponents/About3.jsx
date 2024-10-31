import React from 'react'

function About3() {
  return (
    <div className=' w-full h-[80vh] grid grid-cols-2 '>
      <div className='  flex  bg-[red] border-transparent  '>
      <div className="flex flex-col justify-center  md:flex-row items-center  w-full max-w-6xl px-6">
        {/* Text Section */}
        <div className="text-left md:w-1/2">
          <h2 className="text-3xl font-bold text-[orangered] mb-8">What we believe</h2>
          
          <div className="space-y-4">
            <div className="bg-white w-[150%] text-black font-semibold text-lg px-6 py-4 shadow-xl rounded-lg border-b-4 border-black">
              Learning should not be a privilege; it must be for everyone.
            </div>
            <div className="bg-white w-[130%] text-black font-semibold text-lg px-6 py-4 shadow-xl rounded-lg border-b-4 border-black">
              Always lead by example, nobody remembers second.
            </div>
            <div className="bg-white w-[110%] text-black font-semibold text-lg px-6 py-4 shadow-xl rounded-lg border-b-4 border-black">
              Progress needs change. Be the change.
            </div>
          </div>
        </div>

        {/* Image Section */}
        
      </div>
      </div>
      <div className=' bg-yellow-200  bg-[url(./assets/pics6.jpg)] bg-cover bg-center border-transparent'></div>
    </div>
  )
}

export default About3