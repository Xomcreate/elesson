import React from 'react'

function Login() {
  return (
    <div className=' h-[100vh] w-[100vw] grid justify-center items-center'>
       <form action="">
       <div className=' bg-[#e2e2e2] h-[60vh] w-[40vw] grid grid-rows-6' >
            <div className=' bg-[#e4e4e3] row-span-1 grid justify-center items-center font-bold text-[20px] font-mono'>
                👨‍🎓Student Login
            </div>
            <div className='  row-span-5 grid grid-rows-6 '>
                {/* <div className=' bg-[hsl(0,100%,50%)]'></div> */}
                <div className='  row-span-2 grid ml-[20px] items-center font-semibold  '>Email/Phone  
                   <p><input className=' bg-gray-500 w-[35vw] h-[6vh] ' placeholder=' input your email' type="email" /></p>
                    
                    </div>
                <div className='  ml-[20px] grid items-center row-span-2 font-semibold'>
                    Password <p> <input className=' w-[35vw] bg-gray-500 h-[6vh]' placeholder='input your password' type="password" /></p>
                </div>
                <div className=' grid grid-rows-4 row-span-1'>
                    <div className='  row-span-3 grid justify-center items-center'><button className='bg-[orangered] rounded font-semibold h-[6vh] w-[10vw]'>Login</button></div>
                    <div className=' grid justify-center items-center font-semibold '>Forgot Password</div>
                </div>
            </div>
        </div>
       </form>
    </div>
  )
}

export default Login