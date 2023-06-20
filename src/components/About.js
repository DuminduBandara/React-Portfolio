import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';

import { motion, useInView } from 'framer-motion';

import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { BiRightArrowCircle } from 'react-icons/bi';
import { AiTwotonePhone, AiOutlineFundProjectionScreen } from 'react-icons/ai';

const pageLoaded = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      dumping: 20,
    },
  },
};

const About = () => {
  return (
    <motion.div variants={pageLoaded} initial="hidden" animate="visible">
      <motion.div
        initial={{
          opacity: 0,
          y: 300,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          dumping: 50,
        }}
        className="my-6"
      >
        <h1 className="text-[#0000005b] text-[3.5rem] md:text-[5rem] lg:text-[13rem] text-center font-header">
          About Me.
        </h1>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          viewTarget: 'hidden',
        }}
        animate={{
          opacity: 1,
          visibility: 'visible',
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          delay: 1,
        }}
      >
        <div className="w-full mb-8 flex justify-end">
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', dumping: 300 },
            }}
            whileTap={{ scale: 0.9 }}
            className="px-5 py-3 mt-5 w-[200px] font-header text-lg rounded-3xl bg-black text-white"
          >
            <a
              href="https://drive.google.com/file/d/1-jnY_jGQ799dXqNqN2vtJErnjHpM7fDW/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </motion.button>
        </div>
        <div className="grid grid-flow-row-dense lg:grid-cols-2 grid-rows-1 mb-10">
          <div className="lg:col-span-1 overflow-hidden w-full mb-12 lg:mb-0  lg:w-96 drop-shadow-lg">
            <img
              src={process.env.PUBLIC_URL + '/images/me.jpg'}
              className="w-full h-fit"
            />
          </div>
          <div className="col-span-1 p-[20px] flex flex-col justify-center rounded-3xl drop-shadow-lg bg-white">
            <h2 className="sm:text-2xl md:text-4xl lg:text-5xl text-center font-header">
              I'm Dumindu Lakshan
            </h2>
            <h4 className="text-3xl font-option text-[#000000af] mt-2 text-center">
              Undergraduate.
            </h4>
          </div>
        </div>
        <div className="px-[40px] flex flex-col justify-center text-left lg:col-span-3 p-5 rounded-3xl drop-shadow-lg bg-white mb-12">
          <h3 className="text-3xl font-header mb-5">About me</h3>
          <p className="text-lg font-body leading-7 font-semibold space-x-2">
            Hello, I'm Dumindu Lakshan Bandara, currently pursuing a BSc(Hons) in Information Technology specializing in Information Technology at SLIIT, Malabe. As an ambitious individual, I am always striving to improve and grow. My approach towards work is honest and I value teamwork, ensuring that everyone's opinions are heard. I take a thoughtful approach to implementing programs, carefully considering their effectiveness. I am committed to achieving my goals in a timely and accurate manner and strive to maintain a positive outlook in all situations.
          </p>
        </div>
        <div className="px-[40px] flex flex-col justify-center text-left p-5 rounded-3xl drop-shadow-lg bg-white mb-12">
          <h3 className="text-3xl font-header mb-5">Education</h3>
          <div className="border-b-4 border-gray-400 mb-6">
            <p className="text-[1.2rem] font-header font-semibold space-x-2">
              B.Sc.Special(Hons)–Information Technology
              Specialization–Information Technology
            </p>
            <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">
              Sri Lanka Institute of Information Technology, Malabe
            </p>
            <p className="text-[0.9rem] font-body leading-7 font-semibold space-x-2 mb-4">
              May 2021 - Current (Expected Graduation Date – May 2025)
            </p>
          </div>
          <div className="border-b-4 border-gray-400 mb-6">
            <p className="text-[1.2rem] font-header font-semibold space-x-2">
              Successfully completed GCE Advanced Level Examination(Art)
            </p>
            <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">
              Welimada Central College
            </p>
            <p className="text-[0.9rem] font-body leading-7 font-semibold space-x-2 mb-4">
              Nov 2020
            </p>
          </div>
          <div>
            <p className="text-[1.2rem] font-header font-semibold space-x-2">
              Successfully completed GCE Ordinary Level Examination
            </p>
            <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">
              Welimada Central College
            </p>
            <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">
              Dec 2017
            </p>
          </div>
        </div>

        <div className="px-[40px] flex flex-col justify-center text-left p-5 rounded-3xl drop-shadow-lg bg-white">
          <h3 className="text-3xl font-header mb-5">CERTIFICATIONS</h3>
          <div className="border-b-4 border-gray-400 mb-6">
            <a
              href="https://coursera.org/share/577c9bcf07459df260d54cce8f09469f"
              className="text-[1.2rem] font-header font-semibold space-x-2"
              target="_blank"
            >
              Python for Data Science, AI & Development
            </a>
            <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">
              IBM
            </p>
            <p className="text-[0.9rem] font-body leading-7 font-semibold space-x-2 mb-4">
              February 18, 2023
            </p>
          </div>
          <div>
            <a
              href="https://coursera.org/share/d7368c9cf47e717bbff91b83cee752b3"
              className="text-[1.2rem] font-header font-semibold space-x-2"
              target="_blank"
            >
              Front-End Web Development with React
            </a>
            <p className="text-[1.02rem] font-body leading-7 font-semibold space-x-2">
            The Hong Kong University of Science and Technology
            </p>
            <p className="text-[0.9rem] font-body leading-7 font-semibold space-x-2 mb-4">
            January 15, 2023
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
