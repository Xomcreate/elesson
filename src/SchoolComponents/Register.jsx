import React from 'react'

function Register() {
  return (
    <div className='  h-[100vh] w-[100vw] grid justify-center items-center rounded-lg'>
      <form action="">
      <div className=' bg-[#fdfdfd] h-[70vh] w-[50vw] grid grid-rows-6' >
        <div className=' bg-[#dddcdc] row-span-1 grid justify-center items-center font-mono font-semibold text-[20px]'>Create an account</div>
        <div className='  row-span-5 grid grid-rows-4' >
          <div className='  row-span-3 gap-[10px]  grid grid-cols-2'>
            <div className='  ml-[30px] grid grid-rows-3'>
              <div className='   grid  items-center font-semibold text-[15px] '>FullName <p><input placeholder=' Your name' className='  bg-gray-500  h-[6vh] w-[20vw]' type="text" /></p></div>
              <div className='   font-semibold text-[15px] items-center grid'>Phone No: <p><input placeholder=' Your Phone no' className='  bg-gray-500  h-[6vh] w-[20vw]' type="text" /></p></div>
              <div className=' font-semibold text-[15px] items-center grid'>email <p><input placeholder='Your email address' className='  bg-gray-500  h-[6vh] w-[20vw]' type="email" /></p></div>
            </div>
            <div className='  mr-[30px] grid grid-rows-3 '>
            <div className='   grid  items-center font-semibold text-[15px] '>Password <p><input placeholder='Set Password' className='  h-[6vh]  bg-gray-500 w-[20vw]' type="password" /></p></div>
              <div className='   font-semibold text-[15px] items-center grid'>Confirm Password <p><input placeholder=' Retype password' className='  bg-gray-500 h-[6vh] w-[20vw]' type="password" /></p></div>
              <div className=' font-semibold text-[15px] items-center grid'>state: <p><input placeholder=' Your state' className=' bg-gray-500  h-[6vh] w-[20vw]' type="text" /></p></div>
            </div>
          </div>
          <div className=' bg-[wheat row-span-1] grid justify-center items-center'><button className=' h-[6vh] bg-[orangered] text-white font-bold rounded-lg w-[10vw]'>Register</button></div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Register