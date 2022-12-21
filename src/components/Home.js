import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {

    return(
        <motion.div
            initial={{x: 500}}
            animate={{ x: 0 }}
            transition={{type: "spring", stiffness: 300, damping: 20}}
        >
            <h1>This is the Home</h1>
        </motion.div>
    );

}

export default Home;