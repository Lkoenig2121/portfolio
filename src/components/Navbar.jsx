import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
         
import Logo from '../assets/logo.png'
         
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
         
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      
      <div>
        <Link to="home" smooth={true} offset={50} duration={500}>
          <img src={Logo} alt="Logo" className="w-12" />
        </Link>
      </div>

        {/* menu */}
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>Skills</Link>
          </li>
          <li>
            <Link to="work" smooth={true} offset={50} duration={500}>Work</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link>
          </li>
        </ul>

        {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

        {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>About</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>Skills</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>Work</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="pageBottom" smooth={true} offset={50} duration={500}>Contact</Link>
        </li>
      </ul>

        {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                <a href="https://www.linkedin.com/in/lukas-koenig-3b9645217" target="_blank" className="flex justify-between items-center w-full text-gray-300" rel="noreferrer">
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                <a href="https://github.com/Lkoenig2121" target="_blank" className="flex justify-between items-center w-full text-gray-300" rel="noreferrer"> 
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                <a href="mailto:Lkoenig2121@gmail.com" className="flex justify-between items-center w-full text-gray-300">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
             <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                <a href="Lukas_Koenig_Resume.pdf" target="_blank" className="flex justify-between items-center w-full text-gray-300">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
