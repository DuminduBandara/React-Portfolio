import { motion } from "framer-motion";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { BsBootstrapFill} from "react-icons/bs";


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

const Project = () => {
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
                <h1 className="text-[#0000005b] text-[3.5rem] md:text-[5rem] lg:text-[13rem] text-center font-header">Projects.</h1>
            </motion.div>
            <div>
                <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
                    <div className="col-span-2 max-h-[220px]">
                        <img src="https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/weatherApp.PNG?raw=true" className="w-full h-full"/>
                    </div>
                    <div>
                        <h1>Weather App</h1>
                        <h2>Languages</h2>
                        <ul>
                            <li>
                                <FaReact/>
                                <span>React JS</span>
                            </li>
                            <li>
                                <FaBootstrap/>
                                <span>Bootstrap</span>
                            </li>
                        </ul>
                    </div>
                    <a href="https://345deb31.react-weather-app-b39.pages.dev" target="_blank">
                        <span>View Live</span>
                        <AiOutlineFullscreen/>
                    </a>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Project;