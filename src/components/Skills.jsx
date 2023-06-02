import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.jpeg'

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
            <p className="text-4xl font-bold inline border-b-4 border-blue-700">Skills</p>
            <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={html} alt="html"></img>
                <p clasName="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={css} alt="html"></img>
                <p clasName="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={javascript} alt="html"></img>
                <p clasName="my-4">Javascript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={react} alt="html"></img>
                <p clasName="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={tailwind} alt="html"></img>
                <p clasName="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={git} alt="html"></img>
                <p clasName="my-4">Git</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
