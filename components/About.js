import React from 'react'
import Image from 'next/image'
import mypic from '../Images/shrinidhi.png'
// import mypic from '../Images/hero.svg'
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiSvelte } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';


const About = () => {
  return (
    <div  className=" about_main grid lg:grid-cols-2 mt-10 ">
        {/* Image */}
        <div className="flex justify-center items-center lg:p-0 p-5 "> 
            <Image width="500px" height="500px" className="about_img rounded-full border-4 lg:m-0 m-4 " src={mypic}/>
        </div>
        {/* intro */}
        <div className="flex flex-col justify-center  items-center">
            <p className="lg:text-xl text-base text-gray-200 p-3 text-justify leading-relaxed  lg:mr-5">
            Hello !  👋<br/><br/>
            I am <span className="font-bold">Shreenidhi Batavi</span>, <br/>
            <p className=" text-lg mt-2">I have done my graduation in Electronics and communication Engineering and currently I am working as a full stack Developer. 

            <br></br>
           I am passionate developer with hands on experience in developing scalable websites/application using a wide range of front end technologies and backend technologies. I also write blogs on these technologies.I am enthusiastic about fast evolving front end world and very Passionate and would love to explore the technologies</p> 

            </p>
                     {/* skills */}
                    <div className="skills  w-full ">
                         <h1 className="text-gray-200 text-2xl font-bold  text-gray-200 mb-2  ml-5 underline mt-1 ">My Skills</h1>
                         <div className="icons grid grid-cols-4 gap-8 lg:p-1 p-3 mt-4">
                         <div className="flex flex-col justify-center items-center">
                            <FaHtml5 className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">HTML</h1>
                        </div>  
                        <div className="flex flex-col justify-center items-center">
                            <FaCss3Alt className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm lg:text-sm text-sm">CSS</h1>

                        </div>  
                        <div className="flex flex-col justify-center items-center">
                            <SiJavascript className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">Javascript</h1>

                        </div> 
                        <div className="flex flex-col justify-center items-center">
                            <FaReact className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">React.js</h1>

                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiSvelte className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">Svelte</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiNextdotjs className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">Next.js</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiTailwindcss className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">Tailwind css</h1>
                        </div>  
                        <div className="flex flex-col justify-center items-center">
                            < FaBootstrap className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">Bootstrap</h1>
                        </div>  
                         
                        <div className="flex flex-col justify-center items-center">
                            <FaNodeJs className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">Node.js</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiMysql className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">Mysql</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <FaAws className="w-14 h-14 text-gray-100" />
                            <h1 className="text-gray-400 mt-1 lg:text-sm text-sm">AWS</h1>
                        </div>
                         </div>
                        </div> 
                        
            </div>
       
    </div>
  )
}

export default About