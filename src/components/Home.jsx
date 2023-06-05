import React, { } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { IoIosStar } from 'react-icons/io'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen lg:pl-10 lg:pr-10 bg-[#0a192f] landscape:pt-20 z-10">
      
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <figure>
            <div className="flex justify-start sm:justify-center items-center">
              <IoIosStar className="mr-1 text-white" />
              <IoIosStar className="mx-1 text-white" />
              <IoIosStar className="mx-1 text-white" />
              <IoIosStar className="mx-1 text-white" />
              <IoIosStar className="ml-1 text-white" />
            </div>
            <p className="text-blue-700">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Lukas Koenig</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Frontend Developer</h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a frontend developer specializing in building 
            ( and occasionally designing ) exceptional digital experiences. 
            Currently, I'm focused on building responsive frontend 
            web applications </p>
            <div>
            <Link to="work" smooth={true} offset={50} duration={500} className="inline-block mr-10">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-700 hover:border-blue-700">View Work
                <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" /></span>
                </button>
            </Link>
            <Link to="pageBottom" smooth={true} offset={50} duration={500} className="inline-block lg:hidden">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-700 hover:border-blue-700">Contact me
                </button>
            </Link>
            </div>
          </figure>
        </div>

    </div>
  )
}

export default Home
