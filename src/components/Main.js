import { BrowserRouter, Routes, Route, NavLink , Link} from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import Home from "./Home";
import Project from "./Project";

const navAnimation = {
    hidden: { 
        opacity: 0 
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            delay: 0.5,
            duration: 1.5,
        }
    }
}

const NavLinkAnimation = {

}

const Navbar = () => {
    return ( 
        <BrowserRouter>
            <div className="w-screen px-20 py-12 bg-white">
                <motion.nav 
                    variants={navAnimation}
                    initial="hidden"
                    animate="visible"
                    className="main-nav w-full flex justify-around items-center">
                    <div>
                        <h1 className="font-header text-3xl">Portfolio.</h1>
                    </div>
                    <ul className="w-[50%] flex justify-between font-header text-sm ">
                        <motion.li
                             whileHover={{
                                y: -10,
                                transition: {type: "spring", stiffness: 300, damping: 20},
                            }}
                        >
                            <NavLink className="p-3 rounded-3xl" to='/'>Home</NavLink>
                        </motion.li>
                        <motion.li
                             whileHover={{
                                y: -10,
                                transition: {type: "spring", stiffness: 300, damping: 20},
                            }}
                        >
                            <NavLink className="p-3 rounded-3xl" to='about'>about</NavLink>
                        </motion.li>
                        <motion.li
                             whileHover={{
                                y: -10,
                                transition: {type: "spring", stiffness: 300, damping: 20},
                            }}
                        >
                            <NavLink className="p-3 rounded-3xl" to='project'>Projects</NavLink>
                        </motion.li>
                        <motion.li
                             whileHover={{
                                y: -10,
                                transition: {type: "spring", stiffness: 300, damping: 20},
                            }}
                        >
                            <NavLink className="p-3 rounded-3xl" to='contact'>Contact</NavLink>
                        </motion.li>
                    </ul>
                </motion.nav>
                <Routes>
                    <Route path="/" element={<Home/>}>Home</Route>
                    <Route path="project" element={<Project/>}>Projects</Route>
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