import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className="text-gray-400 text-center mt-12 text-4xl w-72 mx-auto flex items-center justify-center">Contact Me</h1>
        <div className="grid lg:grid-cols-2 ">
        <div className="mx-auto flex flex-col justify-center items-center lg:w-11/12 p-6 mt-10">
            <div className="flex flex-col  w-11/12 ">
                    <label className="text-base font-bold mb-2  text-gray-400">Your Name</label>
                    <input
                    type="text"
                    className="text w-3/4 p-2 bg-transparent border border-gray-400 text-gray-200"
                    required
                    />
            </div>
            <div className="flex flex-col w-11/12 ">
                    <label className="text-base font-bold mb-2  text-gray-400 mt-8">Your Email</label>
                    <input
                    type="email"
                    className="text w-3/4 p-2 bg-transparent border border-gray-400 text-gray-200"
                    required
                    />
            </div>
            <div className="flex flex-col w-11/12">
                   <label className="text-base font-bold mb-2   text-gray-400 mt-8">Your Message</label>
                    <textarea
                    rows="5"
                    // cols="50"
                    className="w-3/4 bg-transparent border border-gray-400 text-gray-200"
                    required
                    />
            </div>
            <div className="w-full mt-12 mb-8 flex justify-start"><button className="bg-gray-400 h-8 p-2 w-40 flex items-center justify-center ml-7 rounded shadow-2xl">Submit</button></div>
        </div>
        <div className="order-first  flex justify-center items-center">
                <img style={{width:'600px',height:'600px'}}src="/images/mail.svg" alt="contact"/>
        </div>
        </div>
    </div>
  )
}

export default Contact