import React from 'react'
import { Slide } from 'react-awesome-reveal'

function Footer() {
  return (
    <Slide direction='up'>
    <div className='text-[#172554] h-28 flex justify-around flex-wrap items-center bg-slate-100 shadow-inner'>
      <h1>Devloped by <span className=' font-bold'> NitinYadav </span> &copy; 2024 </h1>
      <div className='flex space-x-10'>
        <h1>Terms & condition</h1>
        <h1>Privacy policy</h1>
      </div>
    </div>
    </Slide>
  )
}

export default Footer
