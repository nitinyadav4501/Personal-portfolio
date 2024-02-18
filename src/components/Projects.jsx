import React from 'react'
import MyProject from './MyProject'
import amazon from '../assets/amazon.png'
import netflix from '../assets/netflix.png'
import alokTelecom from '../assets/alokTelecom.png'
import iCoder from '../assets/iCoder.png'
import portfolio from '../assets/portfolio.png'
import passwordGen from '../assets/passwordGen.png'
import calculator from '../assets/calculator.png'
import todoList from '../assets/todolist.png'
import weather from '../assets/weatherap.png'
import countdown from '../assets/countdown.png'
import countrydata from '../assets/countrydata.png'

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
        <MyProject image={calculator} name={'A calculator'} detail={'A simple calculator where we can calculate'} tech={'React JS, Tailwind CSS'}/>
        <MyProject image={todoList} name={'Todo manager'} detail={'A todolist where we can add your daily todo'} tech={'React JS, Tailwind CSS'}/>
        <MyProject image={weather} name={'Weather app'} detail={'A weather app where we can find weather of anywhere'} tech={'React JS, Tailwind CSS'}/>
        <MyProject image={countdown} name={'Countdown'} detail={'A simple assignment- countdown'} tech={'HTML, CSS, JS'}/>
        <MyProject image={countrydata} name={'Country data web app'} detail={'Country data app where we can know about countries'} tech={'HTML, CSS, JS'}/>
      </div>
    </>
  )
}

export default Projects
