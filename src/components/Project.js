import { motion } from "framer-motion";
import { AiOutlineFullscreen, AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaBootstrap, FaCss3, FaPhp } from "react-icons/fa";
import { BsBootstrapFill} from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiMysql } from "react-icons/si";


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

    const projects = [
        {
            id: 1,
            name: "Weather App",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/weatherApp.PNG?raw=true",
            link: "https://345deb31.react-weather-app-b39.pages.dev/",
            tech: [
                {tName: "React JS", icon: <FaReact className="text-2xl"/>},
                {tName: "Bootstrap", icon: <FaBootstrap className="text-2xl"/>},
                { tName: "HTML", icon: <AiFillHtml5 className="text-2xl"/>},
                { tName: "CSS", icon: <FaCss3 className="text-2xl"/>}
            ]
        },
        {
            id: 2,
            name: "Notepad App",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/weatherApp.PNG?raw=true",
            link: "https://3c55ca37.react-notepad-app.pages.dev",
            tech: [
                { tName: "React JS", icon: <FaReact className="text-2xl"/>},
                { tName: "HTML", icon: <AiFillHtml5 className="text-2xl"/>},
                { tName: "CSS", icon: <FaCss3 className="text-2xl"/>}
            ]
        },
        {
            id: 3,
            name: "Portfolio",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/weatherApp.PNG?raw=true",
            link: "https://e63a9ce5.react-portfolio-27w.pages.dev/",
            tech: [
                { tName: "React JS", icon: <FaReact className="text-2xl"/>},
                { tName: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl"/>},
                { tName: "HTML", icon: <AiFillHtml5 className="text-2xl"/>},
            ]
        },
    ]

    const styles = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }

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
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-10">

                {projects.map((project, i) => (
                    <div className="flex flex-col drop-shadow-lg bg-white relative rounded-xl overflow-hidden">
                        <div className="max-h-[300px] overflow-hidden">
                            <img src={project.image} style={styles}/>
                        </div>
                        <div className="p-6 font-header">
                            <h1 className="text-3xl">{project.name}</h1>
                            <h2 className="text-xl mt-3 mb-2">Technologies</h2>
                            <ul>
                                {project.tech.map((tech, j) => (
                                    <li className="flex items-center mb-3">
                                        {tech.icon}
                                        <span className="ml-2">{tech.tName}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <motion.a
                            
                            animate={{ 
                                x: -20
                            }}
                            transition={{ 
                                repeat: Infinity, 
                                type: 'spring', 
                                stiffness: 600,
                                dumping: 100,
                                duration: 3
                            }}
                            href="https://345deb31.react-weather-app-b39.pages.dev" target="_blank" className="absolute right-5 bottom-10 flex items-center text-[1.1rem] font-header">
                            <span>View Live</span>
                            <AiOutlineFullscreen className="text-xl ml-2"/>
                        </motion.a>
                    </div>
                ))}
            </div>
        </motion.div>
     );
}
 
export default Project;