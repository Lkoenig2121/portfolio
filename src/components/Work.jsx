import React from 'react'
import movieLand from '../assets/websitePicture1.png'
import powerWashing from '../assets/websitePicture2.png'
import bonVoyage from '../assets/websitePicture3.png'
import wedding from '../assets/websitePicture4.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
            <p className="text-4xl font-bold border-b-4 text-gray-300 border-blue-700 inline">Work</p>
            <p className="py-6">Check out some of my recent work</p>
        </div>

        {/*} Container {*/}
        <div className="grid sm:grid-cols-2 gap-4">

            {/*} Items {*/}
            <div style={{backgroundImage: `url(${movieLand})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-center text-black tracking-wider">
                      Movie Land Website
                    </span>
                    <div className="pt-8 text-black text-center">
                        <a href="https://movieland.up.railway.app/" target="_blank" rel="noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Website</button>
                        </a>
                        <a href="https://github.com/Lkoenig2121/MovieLand" target="_blank" rel="noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${powerWashing})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-black tracking-wider">
                        Power Washing
                    </span>
                    <div className="pt-8 text-black text-center">
                        <a href="https://allshorepressure.com/" target="_blank" rel="noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Website</button>
                        </a>
                        <a href="https://github.com/Lkoenig2121/allShorePressure" target="_blank" rel="noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${bonVoyage})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-black tracking-wider">
                        Limousine Services
                    </span>
                    <div className="pt-8 text-black text-center">
                        <a href="https://www.bonvoyagelimousine.com/" target="_blank" rel="noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Website</button>
                        </a>
                        <a href="https://github.com/Lkoenig2121/BonVoyage" target="_blank" rel="noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${wedding})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center object-fit items-center mx-auto content-div">
                
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-black tracking-wider">
                        Wedding Website
                    </span>
                    <div className="pt-8 text-black text-center">
                        <a href="http://richardkoenig.com/" target="_blank" rel="noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Website</button>
                        </a>
                        <a href="https://github.com/Lkoenig2121/TylersWedding" target="_blank" rel="noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        </div>

      </div>
  )
}

export default Work
