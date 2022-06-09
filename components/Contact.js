import React from 'react'
import { useState } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
const Contact = () => {
       const [name,setName]=useState("")
       const [email,setEmail]=useState("")
       const [message,setMessage]=useState("")

       function handleSubmit(e){
        setName("")
        setEmail("")
        setMessage("")
       }

  return (
    <div>
        <h1 className="text-gray-400 text-center mt-12 text-4xl w-72 mx-auto flex items-center justify-center">Contact Me</h1>
        <div className="grid lg:grid-cols-2 ">
        <div className="mx-auto flex flex-col justify-center items-center lg:w-11/12 w-full lg:p-6 lg:mt-10 mt-0">
            <div className="flex flex-col  w-11/12 ">
                    <label className="text-base font-bold mb-2  text-gray-400">Your Name</label>
                    <input
                    type="text"
                    className="text lg:w-3/4 p-2 bg-transparent border border-gray-400 text-gray-200"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    />
            </div>
            <div className="flex flex-col w-11/12 ">
                    <label className="text-base font-bold mb-2  text-gray-400 mt-8">Your Email</label>
                    <input
                    type="email"
                    className="text lg:w-3/4 p-2 bg-transparent border border-gray-400 text-gray-200"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                     value={email}
                    />
            </div>
            <div className="flex flex-col w-11/12">
                   <label className="text-base font-bold mb-2   text-gray-400 mt-8">Your Message</label>
                    <textarea
                    rows="5"
                    // cols="50"
                    className="lg:w-3/4 bg-transparent border border-gray-400 text-gray-200"
                    required
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message}
                    />
            </div>
            <div className="w-full mt-12 mb-8 flex justify-start"><button onClick={handleSubmit} className="bg-gray-400 h-8 p-2 w-40 flex items-center justify-center ml-7 rounded shadow-2xl">Submit</button></div>
        </div>
        <div data-aos="fade-right" data-aos-duration="3000" className="order-first  flex justify-center items-center lg:p-0 p-5">
                <img style={{width:'600px',height:'600px'}}src="/images/mail.svg" alt="contact"/>
        </div>
        </div>
    </div>
  )
}

export default Contact