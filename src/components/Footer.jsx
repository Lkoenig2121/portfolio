import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div name="pageBottom" className="bg-[#0a192f] sm:w-full sm:h-20 lg:hidden flex-row">
        <div className="text-white text-center text-xl">LinkedIn | Github | Email | Resume</div>
        <ul className="w-full justify-center mx-auto flex">
            <li className="inline-block px-auto">
                <a href="https://www.linkedin.com/in/lukas-koenig-3b9645217" target="_blank" className="flex text-gray-300" rel="noreferrer">
                    <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="inline-block px-auto">
                <a href="https://github.com/Lkoenig2121" target="_blank" className="flex text-gray-300" rel="noreferrer"> 
                    <FaGithub size={30}/>
                </a>
            </li>
            <li className="inline-block px-auto">
                <a href="mailto:Lkoenig2121@gmail.com" className="flex text-gray-300">
                    <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className="inline-block px-auto">
                <a href="Lukas_Koenig_Resume.pdf" target="_blank" className="flex text-gray-300">
                    <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer
