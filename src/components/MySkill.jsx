import React from 'react'

function MySkill(props) {
  return (
    <div className='shadow-xl h-42 w-fit mx-auto p-10 hover:scale-105 transition-all'>
      <div className='text-xl font-bold text-[#172554] gap-y-2 flex flex-col justify-center items-center '>
        <img className='h-32' src={props.image} />
        <p>{props.skill}</p>
      </div>
    </div>
  )
}

export default MySkill;
