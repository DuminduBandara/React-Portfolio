import React from'react';
import ReactDOM from'react-dom';

// import router
import { BrowserRouter, Routes, Route, NavLink , Link} from "react-router-dom";

// import icons
import { FaLinkedinIn, FaGithub, FaFacebookF, FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose} from "react-icons/io";

// import farmer-motion
import { motion } from "framer-motion";

// import Components
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
// import NavLinks from './components/NavData';


const navAnimation = {
    hidden: { 
        opacity: 0 
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            dumping: 30           
        }
    }
}

const navLinkAnimation = {
    init: {
        opacity: 0,
        translateY:-100
    },
    animate: {
        opacity: 1,
        translateY: 0,
    }
}

const Navbar = () => {

    const navLinks = [
        {
            id: 1,
            name: "home",
            path: "/",
            element: <Home />
        },
        {
            id: 2,
            name: "about",
            path: "about",
            element: <About/>
        },
        {
            id: 3,
            name: "projects",
            path: "project",
            element: <Project/>
        },
        {
            id: 4,
            name: "contact",
            path: "contact",
            element: <Contact/>
        }
    ]

    const [showNav, setShowNav] = React.useState(false);

    const toggleNav = () => {
        setShowNav(prevNav => !prevNav);
    }




    return ( 

        <BrowserRouter>
            <div className="w-screen relative px-10 lg:px-20 py-12 bg-white">
                <motion.nav 
                    variants={navAnimation}
                    initial="hidden"
                    animate="visible"
                    className="main-nav w-full flex flex-col md:flex-row justify-around items-center">
                    <div className="w-[100%] flex justify-between">
                        <h1 className="font-header text-3xl">Portfolio.</h1>
                        <div className="inline-block md:hidden">
                            <motion.button 
                                whileHover={{
                                    scale: 1.2,
                                    transition: { type: 'spring' , stiffness: 50, damping: 20 },
                                  }}
                                  whileTap={{ scale: 0.9 }}
                                className="text-5xl pointer" onClick={toggleNav}>
                                    {showNav === true ?  <BiMenuAltRight/>: <IoMdClose/>}
                            </motion.button>
                        </div>
                    </div>
                    <ul className={showNav === true ? "md:relative bg-white md:h-[100%] top-0 left-0 z-20 w-full md:w-[50%] flex flex-col md:flex-row md:justify-between justify-center font-header text-sm text-center invisible h-0" : "md:relative bg-white md:h-[100%] top-0 left-0 z-20 w-full md:w-[50%] flex flex-col md:flex-row md:justify-between justify-center font-header text-sm text-center visible"}>
                        
                       {navLinks.map((navLink, i) => (
                        <motion.li
                            key={navLink.id}
                            variants={navLinkAnimation}
                            initial="init"
                            animate="animate"
                            transition={{
                                type: "spring",
                                duration: 1,
                                delay: i * 0.1,
                            }}
                            className="my-5 md:my-0"
                        >
                            <NavLink 
                                to={navLink.path}
                                className="p-3 rounded-3xl"
                            >{navLink.name}</NavLink>
                        </motion.li>
                       ))}                        
                    </ul>
                </motion.nav>
                <Routes className="z-10">
                    <Route path="/" element={<Home/>}>Home</Route>
                    <Route path="project" element={<Project/>}>Projects</Route>
                    <Route path="about" element={<About/>}>About</Route>
                    <Route path="contact" element={<Contact/>}>About</Route>
                </Routes>
                <footer>
                    <div className="flex flex-col justify-center items-center py-10">
                        <ul className="w-[200px] flex justify-between">
                            <li>
                                <a href="https://lk.linkedin.com/" target="_blank">
                                    <FaLinkedinIn className="text-2xl"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/" target="_blank">
                                    <FaGithub className="text-2xl"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/" target="_blank">
                                    <FaFacebookF className="text-2xl"/>
                                </a>
                            </li>
                        </ul>
                        <h3 className="font-header text-sm my-5 underline">Made by Dumindu Lakshan</h3>
                    </div>
                </footer>
            </div>
        </BrowserRouter>

     );
}
 
export default Navbar;