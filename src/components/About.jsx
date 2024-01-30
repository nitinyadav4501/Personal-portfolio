import React from 'react'
import MyImg from './MyImg'
import image from '../assets/myImg.png';

function About() {
    return (
        <>
            <div className="min-h-[37rem] text-[#172554] md:flex flex gap-y-4 py-5 flex-col md:flex-row justify-center items-center md:justify-around">
                <MyImg image={image}/>
                <div className='space-y-7 basis-1/2 text-center md:text-left px-5'>
                    <p className='text-2xl font-bold'>Hello I'm</p>
                    <p className='text-4xl font-bold text-orange-600'>Nitin yadav</p>
                    <p>I was born in kanpur and brought up in kannauj as far as my qualification is concern i have completed my 12th and currently i am pursuing B.Sc. and also preparing for full stack Web Devlopment. My hobbies are playing cricket, watching Movies and playing with code. I want to be a full stack web devloper. <br /> Thank you.</p>
                    <p className='text-2xl font-bold'>Web Developer from India</p>
                </div>
            </div>
        </>
    )
}

export default About
