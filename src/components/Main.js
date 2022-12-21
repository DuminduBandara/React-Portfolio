import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./Home";
import Project from "./Project";

const navLinksAnimation = {
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

const Navbar = () => {
    return ( 
        <BrowserRouter>
            <div className="w-screen px-20 py-12 bg-white">
                <motion.nav 
                    variants={navLinksAnimation}
                    initial="hidden"
                    animate="visible"
                    className="main-nav w-full flex justify-around items-center">
                    <div>
                        <h1 className="font-header text-3xl">Portfolio.</h1>
                    </div>
                    <div className="w-[50%] flex justify-between font-header text-sm ">
                        <NavLink className="p-3 rounded-3xl" to='/'>Home</NavLink>
                        <NavLink className="p-3 rounded-3xl" to='about'>About me</NavLink>
                        <NavLink className="p-3 rounded-3xl" to='project'>Projects</NavLink>
                        <NavLink className="p-3 rounded-3xl" to='/contact'>Contact</NavLink>
                    </div>
                </motion.nav>
                <Routes>
                    <Route path="/" element={<Home/>}>Home</Route>
                    <Route path="project" element={<Project/>}>Projects</Route>
                </Routes>
            </div>
        </BrowserRouter>

     );
}
 
export default Navbar;