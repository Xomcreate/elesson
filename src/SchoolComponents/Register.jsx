import React from 'react'

function Register() {
  return (
    <div className='  justify-center grid items-center h-[100vh] w-[100vw] '>
     <form action="">
     <div className=' bg-[#f7f2f2] h-[80vh] w-[45vw] grid grid-rows-8 rounded-lg gap-[5px]'>
    <div className=' bg-[#c4c4c4] grid justify-center items-center font-mono font-semibold text-[20px] row-span-1'>Create an account</div>
    <div className='  row-span-6 grid ml-[25px] gap-[5px] grid-rows-6'>
      <div className='  grid items-center text-[15px] font-semibold '>
        Firstname <p><input type="text" className=' rounded-lg bg-gray-500 h-[6vh] w-[40vw]' placeholder=' Your name' /></p>
      </div>
      <div className='  grid items-center text-[15px] font-semibold  '> Email <p><input type="email" className=' rounded-lg bg-gray-500 h-[6vh] w-[40vw]' placeholder=' email address' /></p></div>
      <div className='  grid items-center text-[15px] font-semibold '> Phone No: <p><input type="text" className=' rounded-lg bg-gray-500 h-[6vh] w-[40vw]' placeholder=' Phone number' /></p></div>
      <div className='  grid items-center text-[15px] font-semibold  '> State <p><input type="text" className=' rounded-lg bg-gray-500 h-[6vh] w-[40vw]' placeholder=' Your state' /></p></div>
      <div className='  grid items-center text-[15px] font-semibold  '> Password <p><input type="password" className=' rounded-lg bg-gray-500 h-[6vh] w-[40vw]' placeholder=' Set your password' /></p></div>
      <div className='  grid items-center text-[15px] font-semibold  '> Confirm Password <p><input type="password" className=' rounded-lg bg-gray-500 h-[6vh] w-[40vw]' placeholder=' Re-type password' /></p></div>
      

    </div>
    <div className=' grid justify-center items-center row-span-1'><button className=' text-[white] font-semibold bg-[orangered] h-[6vh] rounded-lg w-[10vw]'>Register</button></div>

         </div>
     </form>
    </div>
  )
}

export default Register