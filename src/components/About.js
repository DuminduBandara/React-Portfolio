import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

import { motion, useInView } from "framer-motion";

import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BiRightArrowCircle } from "react-icons/bi";
import { AiTwotonePhone, AiOutlineFundProjectionScreen } from "react-icons/ai";

const pageLoaded = {
    hidden: { 
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            dumping: 20           
        }
    }
}

const About = () => {


    return ( 
        <motion.div
            variants={pageLoaded}
            initial= "hidden"
            animate= "visible"
        >

            <motion.div 
                initial={{
                    opacity: 0,
                    y: 300
                }}
                animate= {{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                }}
                className="my-6">
                <h1 className="text-[#0000005b] text-[3.5rem] md:text-[5rem] lg:text-[13rem] text-center font-header">About Me.</h1>
            </motion.div>  
            <motion.div 
                initial={{
                    opacity: 0,
                    viewTarget: "hidden"
                }}
                animate= {{
                    opacity: 1,
                    visibility: "visible"
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 1
                }}
                className="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 grid-rows-7 lg:grid-rows-3 gap-10 lg:gap-20">
                <div className="lg:col-span-2  overflow-hidden rounded-3xl drop-shadow-lg">
                    <img src={process.env.PUBLIC_URL + '/images/me.jpg'}  className="w-full contain"/>
                </div>
                <div className="p-[20px] flex flex-col justify-center rounded-3xl drop-shadow-lg bg-white">
                    <h2 className="sm:text-2xl md:text-4xl lg:text-5xl text-center font-header">I'm Dumindu Lakshan</h2>
                    <h4 className="text-3xl font-option text-[#000000af] mt-2 text-center">Undergraduate.</h4>
                </div>
                <div className="px-[40px] flex flex-col justify-center text-left lg:col-span-2 p-5 rounded-3xl drop-shadow-lg bg-white">
                    <h3 className="text-3xl font-header mb-5">About me</h3>
                    <p className="text-lg font-body leading-7 font-semibold space-x-2">I’m a Undergraduate at Sri Lanka Institute Of Information Technology(SLIIT), and specializing in web design, illustration and visual development. I have worked in multidisciplinary fields, in both large and small companies, startups and as a freelancer.</p>
                </div>
                <div className="px-[40px] flex flex-col justify-center text-left p-5 rounded-3xl drop-shadow-lg bg-white">
                    <h3 className="text-3xl font-header mb-5">Experience</h3>
                    <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">360degree Front-End Developer 2022</p>
                    <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">Revolution Design Lead 2021-2022</p>
                    <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">Circle UX Designer 2019-2022</p>
                </div>
                <motion.a
                    whileHover={{
                        color: '#000000af',
                        fontSize: '20px',
                        transition: { type: "spring", dumping: 30},
                    }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.creative-tim.com/presentation" 
                    className="relative flex justify-center items-center font-header text-center p-5 rounded-3xl drop-shadow-lg bg-white text-3xl">
                    <HiOutlineDocumentDownload className=""/>
                    <span className="hidden md:block" >Download CV</span>
                    <BiRightArrowCircle className="absolute right-10 bottom-5 text-5xl"/>
                </motion.a>
                
                <Link to="/contact" className="relative flex justify-center font-header items-center text-center p-5 rounded-3xl drop-shadow-lg bg-white text-3xl">
                    <motion.button
                        whileHover={{
                            color: '#000000af',
                            fontSize: '20px',
                            transition: { type: "spring", dumping: 30},
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="flex"
                    >
                        <AiTwotonePhone className=""/>
                        <span className="hidden md:block">Contact me</span>
                        <BiRightArrowCircle className="absolute right-10 bottom-5 text-5xl"/>
                    </motion.button>
                </Link>
                <Link to="/project" className="relative flex justify-center items-center font-header text-center p-5 rounded-3xl drop-shadow-lg bg-white text-3xl">
                    <motion.button
                        whileHover={{
                            color: '#000000af',
                            fontSize: '20px',
                            transition: { type: "spring", dumping: 30},
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="flex"
                    >
                        <AiOutlineFundProjectionScreen className=""/>
                        <span className="hidden md:block">Projects</span>
                        <BiRightArrowCircle className="absolute right-10 bottom-5 text-5xl"/>
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
     );
}
 
export default About;