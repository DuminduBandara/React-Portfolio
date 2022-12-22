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
        {id:1, path:"images/logo/html.png"},
        {id:2, path:"images/logo/css.png"},
        {id:3, path:"images/logo/js.png"},
        {id:4, path:"images/logo/react.jpg"},
        {id:5, path:"images/logo/nextjs.png"},
        {id:6, path:"images/logo/redux.png"},
        {id:7, path:"images/logo/node.png"},
        {id:8, path:"images/logo/sql.png"},
        {id:9, path:"images/logo/tailwind.png"},
        {id:10, path:"images/logo/bootstrap.png"},
        {id:11, path:"images/logo/npm.png"},
        {id:12, path:"images/logo/java.png"},
        {id:13, path:"images/logo/c++.png"},
        {id:14, path:"images/logo/c.png"},
        {id:15, path:"images/logo/motion.webp"},
        {id:16, path:"images/logo/php.png"},
    ]

    const logosTwo = [
        {id:1, path:"images/logo/vscode.svg"},
        {id:2, path:"images/logo/sublime.svg"},
        {id:3, path:"images/logo/github.svg"},
        {id:4, path:"images/logo/intellij.svg"},
        {id:5, path:"images/logo/vscode.svg"},
        {id:6, path:"images/logo/git.png"},
        {id:7, path:"images/logo/eclipse.svg"},
        {id:8, path:"images/logo/canva.svg"},
        {id:9, path:"images/logo/mockFlow.webp"},
        {id:8, path:"images/logo/cloud.png"},
        {id:8, path:"images/logo/netlify.svg"},
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
                                delay: i * 0.1,
                            }}
                            className="overflow-hidden bg-white drop-shadow-lg rounded-lg flex items-center p-5">
                            <img src={`${process.env.PUBLIC_URL}/${logo.path}`} alt={logo.id} className="w-[100%] " />
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
                                delay: i * 0.1,
                            }}
                            className="overflow-hidden bg-white drop-shadow-lg rounded-lg flex items-center p-5">
                            <img src={`${process.env.PUBLIC_URL}/${logo.path}`} alt={logo.id} className="w-[100%] " />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
        </motion.div>
    );
}
 
export default Skill;