import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { MdAlternateEmail, MdPhoneAndroid } from "react-icons/md";
import { BsArrowRightShort, BsCheckCircle } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";


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


const Contact = () => {

    const [send, setSend] = React.useState(false);

    const toggleSend = () => {
        setSend(prevSend => !prevSend);
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9m790x3', 'template_xaynfcq', e.target, 'jZ2NDbnd__co-toij')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };

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
                    stiffness: 100,
                    dumping:50
                }}
                className="my-6">
                <h1 className="text-[#0000005b] text-[3.2rem] md:text-[5rem] lg:text-[12rem] text-center font-header">Contact Me.</h1>
            </motion.div>
            <div className="font-header grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-1 gap-10">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 300,
                    }}
                    animate= {{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        dumping:50,
                    }}
                    className="bg-white drop-shadow-lg rounded-lg p-8 max-h-[200px]">
                    <ul>
                        <motion.li 
                            whileHover={{
                                translateX: 15,
                                transition: { type: "spring", dumping: 300},
                            }}
                            className="flex items-center text-lg mb-2">
                            <MdAlternateEmail className="text-xl"/>
                            <span className="ml-1">lakshand969@gmail.com</span>
                        </motion.li>

                        <motion.li 
                            whileHover={{
                                translateX: 15,
                                transition: { type: "spring", dumping: 300},
                            }}
                            className="flex items-center text-lg mb-2 cursor-pointer">
                            <MdPhoneAndroid className="text-xl"/>
                            <span className="ml-1">+94 71 681 6224</span>
                        </motion.li>

                        <motion.li 
                            whileHover={{
                                translateX: 15,
                                transition: { type: "spring", dumping: 300},
                            }}
                            className="flex items-center text-lg mb-2 cursor-pointer">
                            <BsGithub className="text-xl"/>
                            <a href='https://github.com/lakshan969Github' target='_blank' className="ml-1">GitHub(lakshan969Github)</a>
                        </motion.li>

                        <motion.li 
                            whileHover={{
                                translateX: 15,
                                transition: { type: "spring", dumping: 300},
                            }}
                            className="flex items-center text-lg mb-2 cursor-pointer">
                            <BsLinkedin className="text-xl"/>
                            <a href='https://www.linkedin.com/in/dumindu-bandara-76b459267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bt1Rbg6QrRXaMckQc0GXIMg%3D%3D' target='_blank' className="ml-1">LinkedIn(Dumindu Bandara)</a>
                        </motion.li>

                    </ul>
                </motion.div>
                <motion.div 
                    initial={{
                        opacity: 0,
                        y: 300,
                    }}
                    animate= {{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        dumping:50,
                    }}
                    className="lg:col-span-2 drop-shadow-lg bg-white rounded-lg p-8">
                    {send == false ?
                    <form onSubmit={sendEmail}>
                        <div className="mb-5">
                            <motion.label 
                                whileHover={{
                                    translateX: 15,
                                    transition: { type: "spring", dumping: 300},
                                }}
                                htmlFor="email" className="flex text-lg items-center">
                                <span>Email</span>
                                <BsArrowRightShort className="text-2xl"/>
                            </motion.label>
                            <input className="bg-gray-200 py-3 px-4 mt-2 w-full rounded-xl placeholder:text-gray-600" type="email" name="email" placeholder="Enter your email" required/>
                        </div>
                        <div className="mb-5">
                            <motion.label
                                whileHover={{
                                    translateX: 15,
                                    transition: { type: "spring", dumping: 300},
                                }}
                                htmlFor="name" className="flex text-lg items-center">
                                <span>Subject</span>
                                <BsArrowRightShort
                                    className="text-2xl"/>
                            </motion.label>
                            <input className="bg-gray-200 py-3 px-4 mt-2 w-full rounded-xl placeholder:text-gray-600" type="text" name="subject"  placeholder="Enter your subject" required/>
                        </div>
                        <div className="mb-5">
                            <motion.label
                                whileHover={{
                                    translateX: 15,
                                    transition: { type: "spring", dumping: 300},
                                }}
                                htmlFor="name" className="flex text-lg items-center">
                                <span>Name</span>
                                <BsArrowRightShort
                                    className="text-2xl"/>
                            </motion.label>
                            <input className="bg-gray-200 py-3 px-4 mt-2 w-full rounded-xl placeholder:text-gray-600" type="text" name="name"  placeholder="Enter your name" required/>
                        </div>
                        <div>
                            <motion.label 
                                whileHover={{
                                    translateX: 15,
                                    transition: { type: "spring", dumping: 300},
                                }}
                                htmlFor="message" className="flex text-lg items-center">
                                <span>Message</span>
                                <BsArrowRightShort className="text-2xl"/>
                            </motion.label>
                            <textarea className="bg-gray-200 py-3 px-4 mt-2 w-full h-[200px] rounded-xl placeholder:text-gray-600" name="message" placeholder="Enter your Message" required></textarea>
                        </div>
                        <div className="flex lg:justify-start justify-center">
                            <motion.button 
                                whileHover={{
                                    translateX: 15,
                                    transition: { type: "spring", stiffness:800, dumping: 80},
                                }}
                                className="my-4 px-7 py-3 bg-black text-white rounded-xl" type="submit">
                            Send</motion.button>
                        </div>
                    </form>
                    :
                    <div className='h-[200px] flex flex-col justify-around items-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <BsCheckCircle className='text-6xl mb-3'/>
                            <h1 className='text-3xl'>Thank you..!</h1>
                        </div>
                        <div>
                            <motion.button 
                                whileHover={{
                                    translateX: -15,
                                    transition: { type: "spring", stiffness: 600, dumping: 80},
                                }}
                                className="my-4 px-7 py-3 bg-black text-white rounded-xl" type="submit">
                                <NavLink to="/">Back To Home</NavLink>
                            </motion.button>
                        </div>
                    </div>
                    }       
                </motion.div>
            </div>
        </motion.div>
     );
}
 
export default Contact;