import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import icon from '../Images/hero_img.svg'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect ,useLayoutEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    const [words]=useState(["Developer","Blogger"])
    const [currentWord,setCurrentWord]=useState("")
    const[letter,setletter]=useState()
    // const [isDeleting,setIsdeleting]=useState(false)
    const type=useRef(null)
    const typeWriter=()=>{
       let isDeleting=false
        if(!isDeleting){
            // setCurrentWord(words[0].substring(0,currentWord.length+1)) 
            type.current.textContent=words[0].substring(0,type.current.textContent.length+1)
         }else{
            // setCurrentWord(words[0].substring(0,currentWord.length-1))
            type.current.textContent=words[0].substring(0,type.current.textContent.length-1)
            console.log(words[0].substring(0,type.current.textContent.length-1))
            console.log('first')

         }

         if( type.current.textContent===words[0]){
           isDeleting=true
            console.log('in')
            console.log(isDeleting)
        }
        
    console.log(isDeleting)

    } 
    useEffect(() => {
      AOS.init();
      AOS.refresh();
  
  
    }, [])
    
    
   
  return (
    <>
    <div className="hero_main  h-3 mt-10 grid lg:grid-cols-2 ">
        {/* Name  */}

            <div data-aos="fade-right" data-aos-duration="2000" className=" col-span-1  flex justify-center flex-col lg:border-b lg:border-r  border-amber-300 relative">
                    <div className="lg:text-5xl  text-5xl text-gray-100 ml-11 p-5">Hi  <span className="hi">👋</span>    I am</div>
                    
                    <div className="lg:text-7xl text-6xl text-center mt-5 lg:p-5 text-gray-100 lg:ml-10  font-bold flex lg:justify-start justify-center mx-3">Shreenidhi Batavi </div>
                    <div className=" hidden lg:flex text-gray-100 lg:text-5xl text-4xl text-center mt-5 p-5 font-bold lg:ml-10">I am a Full Stack Developer</div>
                    <div className=" lg:hidden text-gray-100 lg:text-5xl text-4xl text-center mt-5 p-5 font-bold">I am Full Stack Developer</div>
                    
            <div className='lg:flex hidden h-40 rounded-full w-40 absolute hero_svg   -bottom-20 -right-20 opacity-25'></div>
                    
            </div>
            {/* photo */}
            <div data-aos="fade-left" data-aos-duration="2000"  className="col-span-1  lg:mt-0 -mt-16 lg:p-0 p-5 flex lg:justify-center lg:items-center lg:border-t border-amber-300">
                    <Image src={icon} width="500px" height="500px" />
            </div> 
    
    </div>
    
    </>
  )
}

export default Hero