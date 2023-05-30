import React from 'react'
         
const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form action="https://getform.io/f/8a3c093a-d6e8-4ab0-946a-46013e04ca5a" method="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-blue-700 text-gray-300">Contact</p>
            <p className="text-gray-300 py-4">Submit the form below or send me an email - Lkoenig2121@gmail.com</p>
        </div>
        <input className="bg-[#ccd6f6] p-2 placeholder-black" type="text" placeholder="Name" name="name" required />
        <input className="bg-[#ccd6f6] p-2 my-4 placeholder-black" type="text" placeholder="Email" name="email" required />
        <textArea className="bg-[#ccd6f6] p-2 placeholder-black" name="message" rows="10" placeholder="Message" required ></textArea>
        <button className="text-white border-2 hover:bg-blue-700 hover:border-blue-700 px-10 py-3 my-8 mx-auto flex items-center">Send</button>
      </form>
    </div>
  )
}

export default Contact