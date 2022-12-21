import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";

const Navbar = () => {
    return ( 
        <BrowserRouter>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='project'>Projects</NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="project" element={<Project/>}>Projects</Route>
        </Routes>
    </BrowserRouter>

     );
}
 
export default Navbar;