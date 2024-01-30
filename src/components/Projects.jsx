import React from 'react'
import MyProject from './MyProject'
import amazon from '../assets/amazon.png'
import netflix from '../assets/netflix.png'
import alokTelecom from '../assets/alokTelecom.png'
import iCoder from '../assets/iCoder.png'
import portfolio from '../assets/portfolio.png'
import passwordGen from '../assets/passwordGen.png'

function Projects() {
  return (
    <>
      <p className='text-4xl text-center mt-10 font-bold text-orange-600'>- My Projects -</p>
      <p className='text-2xl text-center mt-6 font-bold text-orange-600 underline'><a href="https://github.com/nitinyadav4501">Visit Github</a></p>
      <div className='text-[#172554] space-y-4 min-h-[37rem] grid grid-cols-1 md:grid-cols-3 pb-10 mt-3'>
        <MyProject image={amazon} name={'Amazon clone UI'} detail={'This is the Amazon UI Clone'} tech={'HTML, CSS'} />
        <MyProject image={netflix} name={'Netflix clone UI'} detail={'This is the Netflix UI Clone'} tech={'HTML, CSS, JS'}/>
        <MyProject image={alokTelecom} name={'Alok telecom'} detail={'This is a mobile shop project UI'} tech={'HTML, CSS, JS'}/>
        <MyProject image={iCoder} name={'iCoder Blog'} detail={'This is a Blog website'} tech={'HTML, Bootstrap'}/>
        <MyProject image={portfolio} name={'My personal Portfolio'} detail={'This is my personal portfolio'} tech={'React JS, Tailwind CSS'}/>
        <MyProject image={passwordGen} name={'A Random password Generator'} detail={'This is Random password Generator'} tech={'HTML,CSS JS'}/>
      </div>
    </>
  )
}

export default Projects
