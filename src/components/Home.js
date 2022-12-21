import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence} from "framer-motion";

const pageLoaded = {
    hidden: { 
        scale: 0, 
        opacity: 0,
    },
    visible: {
        scale: 1, 
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 40,
            dumping: 20           
        }
    }
}

const Home = () => {

    return(
        
        <motion.div
            variants={pageLoaded}
            initial= "hidden"
            animate= "visible"
            className="w-full min-h-[60vh] flex justify-center items-center pt-10"
        >
            <div className="flex flex-col justify-center items-center py-5 text-center">
                <motion.div
                    whileHover={{
                        rotate: 7,
                        transition: { type: "tween", duration:1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-[220px] h-[220px] overflow-hidden rounded-full drop-shadow-2xl">
                    <img src={process.env.PUBLIC_URL + '/images/user.png'}  className="w-full"/>
                </motion.div>
                <h1 className="mt-5 mb-1 font-header text-4xl">Dumindu Lakshan</h1>
                <h3 className="font-header text-lg font-[300]">Undergraduate.</h3>
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", dumping: 300},
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="px-5 py-3 mt-5 w-[200px] font-header text-lg rounded-3xl bg-black text-white"
                >
                    <Link to="/about">Download CV</Link>
                </motion.button>
            </div>
        </motion.div>
    );

}

export default Home;