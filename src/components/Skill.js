import React from 'react';
import { motion, AnimatePresence, animate} from "framer-motion";
import { BsArrowRightCircle} from "react-icons/bs";


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

const logoAnimation = {
    init: {
        opacity: 0,
        translateY:100
    },
    animate: {
        opacity: 1,
        translateY: 0,
    }
}


const Skill = () => {

    const logosOne = [
        {id:1, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/html.png?raw=true"},
        {id:2, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/css.png?raw=true"},
        {id:3, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/js.png?raw=true"},
        {id:4, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/react.jpg?raw=true"},
        {id:5, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/nextjs.png?raw=true"},
        {id:6, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/redux.png?raw=true"},
        {id:7, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/node.png?raw=true"},
        {id:8, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/sql.png?raw=true"},
        {id:9, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/tailwind.png?raw=true"},
        {id:10, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/bootstrap.png?raw=true"},
        {id:11, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/npm.png?raw=true"},
        {id:12, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/java.png?raw=true"},
        {id:13, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/c++.png?raw=true"},
        {id:14, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/c.png?raw=true"},
        {id:15, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/main/public/images/Logo/motion.webp"},
        {id:16, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/php.png?raw=true"},
    ]

    const logosTwo = [
        {id:1, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/9359bd20176abab0a352650f79cb228e35c0778e/public/images/Logo/vsCode.svg"},
        {id:2, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/9359bd20176abab0a352650f79cb228e35c0778e/public/images/Logo/sublime.svg"},
        {id:3, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/9359bd20176abab0a352650f79cb228e35c0778e/public/images/Logo/github.svg"},
        {id:4, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/9359bd20176abab0a352650f79cb228e35c0778e/public/images/Logo/intellij.svg"},
        {id:5, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/git.png?raw=true"},
        {id:6, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/9359bd20176abab0a352650f79cb228e35c0778e/public/images/Logo/eclipse.svg"},
        {id:7, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/9359bd20176abab0a352650f79cb228e35c0778e/public/images/Logo/canva.svg"},
        {id:8, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/main/public/images/Logo/mockFlow.webp"},
        {id:9, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/cloud.png?raw=true"},
        {id:10, path:"https://raw.githubusercontent.com/lakshan969Github/React-Portfolio/9359bd20176abab0a352650f79cb228e35c0778e/public/images/Logo/netlify.svg"},
        {id:11, path:"https://github.com/lakshan969Github/React-Portfolio/blob/main/public/images/Logo/atom.jpg?raw=true"},
    ]


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
                <h1 className="text-[#0000005b] text-[3.5rem] md:text-[5rem] lg:text-[13rem] text-center font-header">Skills.</h1>
            </motion.div>
            <div 
                className="max-w-screen">
                <h1 className='font-header text-3xl pb-2 lg:text-left text-center'>Technical Skills</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:mb-10 mb-20">
                    {logosOne.map((logo, i) =>(
                        <motion.div 
                            key={logo.id}
                            variants={logoAnimation}
                            initial="init"
                            animate="animate"
                            transition={{
                                type: "spring",
                                duration: 1,
                                delay: i * 0.3,
                            }}
                            className="overflow-hidden bg-white drop-shadow-lg rounded-lg flex items-center p-5">
                            <img src={logo.path} alt={logo.id} className="w-[100%] " />
                        </motion.div>
                    ))}
                </div>
                <h1 className='font-header text-3xl pb-2 lg:text-left text-center'>Tools</h1>
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {logosTwo.map((logo, i) =>(
                        <motion.div
                            key={logo.id}
                            variants={logoAnimation}
                            initial="init"
                            animate="animate"
                            transition={{
                                type: "spring",
                                duration: 1,
                                delay: i * 0.4,
                            }}
                            className="overflow-hidden bg-white drop-shadow-lg rounded-lg flex items-center p-5">
                            <img src={logo.path} alt={logo.id} className="w-[100%] " />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
        </motion.div>
    );
}
 
export default Skill;