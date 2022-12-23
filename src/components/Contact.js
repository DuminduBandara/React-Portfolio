import { motion } from "framer-motion";
import { MdAlternateEmail, MdPhoneAndroid } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";


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
                <h1 className="text-[#0000005b] text-[3.4rem] md:text-[5rem] lg:text-[12rem] text-center font-header">Contact Me.</h1>
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
                    className="bg-white drop-shadow-lg rounded-lg p-8 max-h-[150px]">
                    <ul>
                        <motion.li 
                            whileHover={{
                                translateX: 15,
                                transition: { type: "spring", dumping: 300},
                            }}
                            className="flex items-center text-lg mb-2 cursor-pointer">
                            <MdAlternateEmail className="text-xl"/>
                            <span className="ml-1">lakshand969@gmail.com</span>
                        </motion.li>
                        <motion.li 
                            whileHover={{
                                translateX: 15,
                                transition: { type: "spring", dumping: 300},
                            }}
                            className="flex items-center text-lg cursor-pointer">
                            <MdPhoneAndroid className="text-xl"/>
                            <span className="ml-1">+94 716816224</span>
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
                    <form action="https://formsubmit.co/lakshand969@gmail.com" method="POST">
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
                                    transition: { type: "spring", dumping: 300},
                                }}
                                className="my-4 px-7 py-3 bg-black text-white rounded-xl" type="submit">
                                Send</motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
     );
}
 
export default Contact;