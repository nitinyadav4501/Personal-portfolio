import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import pdf from '../assets/Nitin yadav.pdf'
import { Slide } from 'react-awesome-reveal'

function Navbar() {
    return (
        <Slide direction='down'>
            <nav className='text-blue-950  md:flex md:flex-row flex flex-wrap flex-col gap-y-4 justify-around items-center w-full p-4 shadow-xl '>
                <h1 className='text-3xl font-extrabold font-serif text-orange-600 '>Nitin Yadav</h1>
                <div className='md:flex gap-y-3 gap-x-8 flex-wrap justify-center items-center flex flex-col md:flex-row '>
                    <div className='md:flex flex flex-wrap justify-center md: md:gap-x-6 gap-x-4 font-bold'>
                        <NavLink style={({ isActive }) => { return { color: isActive ? '#ea580b' : '#172554' } }} to='/'><button className='hover:text-orange-600 hover:underline' >Home</button></NavLink>
                        <NavLink style={({ isActive }) => { return { color: isActive ? '#ea580b' : '#172554' } }} to='/skills' ><button className='hover:text-orange-600 hover:underline'>Skills</button></NavLink>
                        <NavLink style={({ isActive }) => { return { color: isActive ? '#ea580b' : '#172554' } }} to='/about'><button className='hover:text-orange-600 hover:underline'>About</button></NavLink>
                        <NavLink style={({ isActive }) => { return { color: isActive ? '#ea580b' : '#172554' } }} to='/contact' ><button className='hover:text-orange-600 hover:underline'>Contact</button></NavLink>
                        <NavLink style={({ isActive }) => { return { color: isActive ? '#ea580b' : '#172554' } }} to='/projects' ><button className='hover:text-orange-600 hover:underline'>My Projects</button></NavLink>
                    </div>
                    <Link to={pdf} download='MyPortfolio' target='__blank'><button className='bg-orange-400 font-bold text-blue-950 p-2 px-3 hover:bg-orange-300 active:bg-orange-400 rounded-full'>Download CV</button></Link>
                </div>
            </nav>
        </Slide>
    )
}

export default Navbar
