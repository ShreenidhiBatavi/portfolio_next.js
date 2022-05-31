import React from 'react'

const Projects = () => {
  return (
    <div className="">
        <h1 className="text-gray-100 text-center text-2xl mt-5 ">Projects</h1>
        <div className="grid lg:grid-cols-3 w-11/12 lg:mx-auto gap-6 p-8 ">
                <div className="text-gray-200">
                         <img src="/images/pharma.jpg" alt="proj_image"/>

                    <h1 className="text-bold text-center text-lg m-1">Retail pharmacy Management system</h1>
                    <p className="text-sm text-justify p-3 shadow-xl text-gray-400 ">This software is built using latest technologies like Nodejs
                        as a backend technology and Express.js as a frameworks and database is Mariadb.This software helps to boosts productivity and eﬃciency with its new features like customised
                        sales invoice generation,informative dashboards and reports.</p>
                    </div>
                <div className="text-gray-200">
                <img src="/images/clinic.jpg" alt="proj_image"/>
                    <h1 className="text-bold text-center text-lg m-1">Hospital management system</h1>
                    <p className="text-sm text-left p-3 shadow-xl text-gray-400 ">This software helps in automation of Health care by providing features, which helps in smooth
running of clinics and hospitals.This software provides features Like,facility to go paperless with
digital documentation,eﬀective management of staﬀ records and attendance management.This
software is built using latest technologies like React.js and Node.js Express.js and mariadb as a
database</p>
                    </div>
                    <div>
                <img src="/images/warehouse.jpg" alt="proj_image" />
                    
                   <h1 className="text-bold text-center text-lg m-1 text-gray-300"> Warehouse Mangement system</h1>
                   <p className="text-sm text-justify p-3 shadow-xl text-gray-400 ">This software makes warehouse management an easier task. This application has both admin
dashboard and mobile application. Dashboard is a web application which keeps track of accounts
and employees and importantly it keeps track of all purchases and sales and its main feature is to
keep track of all orders with all details at every step of the order journey. The web application is built
with modern frameworks/libraries like React.js and Bootstrap and Backend is built with Node.js with
Express.js as a framework and mariadb as a database.Mobile application is PWA built with Next.js</p>
                    
            </div>
                
                <div className="text-gray-200">
                <img src="/images/clinic.jpg" alt="proj_image"/>
                
                    <h1 className="text-bold text-center text-lg m-1">Clinic Management system</h1>
                    <p className="text-sm text-justify p-3 shadow-xl text-gray-400 ">This software helps in automation of Health care by providing features, which helps in smooth
running of clinics and hospitals.This software provides features Like,facility to go paperless with
digital documentation,eﬀective management of staﬀ records and attendance management and
case history management and doctor to doctor communication and also pharmacy integration.This
software is built using latest technologies like React.js and Node.js Express.js and mariadb as a
database</p>
                    </div>
                    <div className="text-gray-200">
                <img src="/images/mysmartshala.jpg" alt="proj_image"/>
                    
                   <h1  className="text-bold text-center text-lg m-1">Mysmart shala</h1> 
                    <p className="text-sm text-left p-3 shadow-xl text-gray-400 ">This software helps in automation of Education system by providing features, which helps in smooth running of Schools and colleges.This software provides features Like,facility to go paperless with
digital documentation,eﬀective management of staﬀ records and attendance management.I have
worked in admin part of the application using technologies like HTML , CSS and javascript and using
Nunjucks as a template engine and built backend with Node.js and Express.js to create REST apis
and Mariadb as a database.</p>
                    </div>
                <div>
                <img src="/images/homeyopati.webp" alt="proj_image"/>    
                    <h1 className="text-bold text-center text-lg m-1 text-gray-300">Software for Homeyopati</h1>
                    <p className="text-sm text-justify p-3 shadow-xl text-gray-400 ">This application is built with modern frameworks/libraries like
React.js and tailwind css and backend is built with Nodes.js with Express,js as a framework and Mariadb
as a database.This software helps in smooth running of Homeopathy organization. This software provides features Like,facility to go paperless with digital documentation and also helps in maintaining details of enquired patients and also registered patients and also helps in
following up with patients. This application helps organization in smooth running of its branches by
effectively managing the data with respect to each branch and thus helping admin in efficient
management of branches as well. </p>
                    </div>
                


        </div>
            <h1 className="text-2xl text-gray-400 ml-28 font-bold underline">Hobby Projects</h1>
            <div className="grid lg:grid-cols-3 w-11/12 lg:mx-auto lg:gap-6 p-8">
                    <div>
                            <img src="/images/cart.png" alt="proj_image"/>
                    <h1 className="text-bold text-center text-lg m-1 text-gray-300">E commerce</h1>
                    <p className="text-sm text-justify p-3 shadow-xl text-gray-400 ">This applicatin is built in React.js and tailwind css.This is an E -commerce application where user can view the various products and can see the detailed information of any single product and can add the products to cart.</p>
                                
                     </div> 
                     <div>
                            <img src="/images/goal.png" alt="proj_image"/>
                                                   <h1 className="text-bold text-center text-lg m-1 text-gray-300">Goal application</h1>

                                <p className="text-sm text-justify p-3 shadow-xl text-gray-400 ">This application is built using MERN stack, which stands for Mongodb, React.js Express.js and Node.js respectively. In this application user can register and  login. user can also create Golas and update or delete the Goals.</p>
                     </div> 
                     <div>
                            <img src="/images/soclone.png" alt="proj_image"/>
                                                   <h1 className="text-bold text-center text-lg m-1 text-gray-300">Stackoverflow Clone</h1>

                                <p className="text-sm text-justify p-3 shadow-xl text-gray-400 ">This Stackoverflow search clone, this application is bulit in React.js , this has a search feature where user can search any term and get question on that particular term and then if user clicks on nay particular question , it will e redirected to answer</p>
                     </div> 
            </div>
                    
    </div>
  )
}

export default Projects