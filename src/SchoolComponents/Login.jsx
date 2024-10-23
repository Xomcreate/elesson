import React from 'react'
import { motion } from 'framer-motion'
import { FaUserGraduate } from 'react-icons/fa'

function Login() {
  return (
    <div className='h-screen w-screen grid justify-center items-center bg-[#fcfcfc]'>
      <motion.div 
        className='bg-[#ffffff] h-[70vh] w-[90vw] md:w-[60vw] lg:w-[30vw] grid grid-rows-6 rounded-2xl shadow-xl'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header with Icon and Text in same line */}
        <div className='bg-[#e4e4e3] h-[60px] row-span-1 flex justify-center items-center font-bold text-[24px] font-mono rounded-t-2xl'>
          <FaUserGraduate size={20} className='text-[#333] mr-2' /> {/* Same line with text */}
          <span className='text-[20px]'>Student Login</span>
        </div>

        <div className='row-span-5 grid p-6'>
          {/* Form */}
          <form className='grid grid-rows-3 gap-4'>
            <div className='grid font-semibold'>
              <label>Email/Phone</label>
              <input 
                className='bg-gray-300 w-[80%] md:w-[70%] lg:w-[80%] h-[6vh] mt-2 rounded-md p-2 shadow-md' 
                placeholder='Enter your email or phone' 
                type="email" 
              />
            </div>
            <div className='grid font-semibold'>
              <label>Password</label>
              <input 
                className='bg-gray-300 w-[80%] md:w-[70%] lg:w-[80%] h-[6vh] mt-2 rounded-md p-2 shadow-md' 
                placeholder='Enter your password' 
                type="password" 
              />
            </div>

            {/* Button without any extra animation */}
            <div className='grid grid-rows-4 row-span-1'>
              <div className='row-span-3 grid justify-center items-center'>
                <motion.button 
                  className='bg-[orangered] text-white font-semibold h-[6vh] w-[120px] rounded-[20px] shadow-lg'
                  whileHover={{ scale: 1.10 }} // Subtle hover effect only
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
              </div>
              {/* Forgot Password back to original placement */}
              <div className='grid justify-center items-center font-semibold'>
                <a href="#" className="text-blue-500 hover:underline">Forgot Password</a>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
