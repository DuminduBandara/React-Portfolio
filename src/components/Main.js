import React from'react';
import ReactDOM from'react-dom';

// import router
import { BrowserRouter, Routes, Route, NavLink , Link} from "react-router-dom";

// import icons
import { FaLinkedinIn, FaGithub, FaFacebookF, FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose} from "react-icons/io";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// import farmer-motion
import { motion, useScroll, useSpring } from "framer-motion";

// import Components
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Skill from "./Skill";


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
        },
        {
            id: 2,
            name: "about",
            path: "about",
        },
        {
            id: 3,
            name: "projects",
            path: "project",
        },
        {
            id: 4,
            name: "skills",
            path: "skill",
        },
        {
            id: 5,
            name: "contact",
            path: "contact",
        }
    ]

    const [showNav, setShowNav] = React.useState(true);
    

    const toggleNav = () => {
        setShowNav(prevNav => !prevNav);
    }

    const [mode, setMode] = React.useState(true);

    const toggleMode = () => {
        setMode(prevMode =>!prevMode);
    }

    const styleLight = {
        color: "black"
        .active &{
            color: 'white',
            background:'black',
        }
    }

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    const [position, setPosition] = React.useState({
        x: -10,
        y: -10,
    });

    React.useEffect(()=> {
        const mousemove = e => {
            setPosition({
                x: e.clientX,
                y: e.clientY,

            })
        }
        window.addEventListener("mousemove", mousemove);

        
        return () => {
            window.removeEventListener("mousemove", mousemove);
        }


    }, [])
    


    const mousePosition = {
        default: {
            x: position.x - 10,
            y: position.y - 10,
            transition: {
                type: "spring",
                stiffness: 100,
                dumping: 10
            }
        }
    }

    const [process, setProcess] = React.useState(60);
    
    // setProcess(prev => 60);

    



    return ( 


        <BrowserRouter>
            <motion.div
                variants={mousePosition}
                animate="default"
                className='bg-[#0000006e] h-[32px] w-[32px] rounded-full fixed top-0'></motion.div>
            <motion.div className="bg-black fixed top-0 left-0 right-0 h-[5px] origin-[0%] z-[200]" style={{ scaleX }} />
            <div className="max-w-screen relative px-10 lg:px-20 py-12">
                <motion.nav 
                    variants={navAnimation}
                    initial="hidden"
                    animate="visible"
                    className="main-nav w-full flex flex-col md:flex-row justify-around items-center">
                    <div className="w-[100%] md:w-[20%] flex justify-between">
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
                    <motion.ul 
                        className={showNav === true ? "md:relative md:h-[100%] top-0 left-0 z-20 w-full md:w-[40%] flex flex-col md:flex-row md:justify-between justify-center font-header text-sm text-center md:visible invisible h-0" : "md:relative bg-white md:h-[100%] top-0 left-0 z-20 w-full md:w-[50%] flex flex-col md:flex-row md:justify-between justify-center font-header text-sm text-center visible"}>
                        
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
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.6 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="my-5 md:my-0"
                        >
                            <NavLink 
                                to={navLink.path}
                                className="p-2"
                                style={({ isActive }) =>
                                    isActive
                                    ? {
                                        borderBottom: '3px solid #000',
                                        // background: '#000',
                                    }
                                    : { color: '#000', background: 'transparent' }
                                }
                            >{navLink.name}</NavLink>
                        </motion.li>
                       ))}                        
                    </motion.ul>
                </motion.nav>
                <Routes className="z-10">
                    <Route path="/" element={<Home/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/skill" element={<Skill/>}/>
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