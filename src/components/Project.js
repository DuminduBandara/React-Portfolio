import { motion } from "framer-motion";
import { AiOutlineFullscreen, AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaBootstrap, FaCss3, FaPhp } from "react-icons/fa";
import { BsBootstrapFill} from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";


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

const projectAnimation = {
    init: {
        opacity: 0,
        translateY:100
    },
    animate: {
        opacity: 1,
        translateY: 0,
    }
}

const Project = () => {

    const projects = [
        {
            id: 1,
            name: "Weather App",
            break: "fully responsive*",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/weatherApp.PNG?raw=true",
            siteLink: "https://345deb31.react-weather-app-b39.pages.dev/",
            codeLink: "https://github.com/lakshan969Github/React-Weather-App.git",
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
            break: "fully responsive*",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/notepad.PNG?raw=true",
            siteLink: "https://3c55ca37.react-notepad-app.pages.dev",
            codeLink: "https://github.com/lakshan969Github/React-Notepad-App.git",
            tech: [
                { tName: "React JS", icon: <FaReact className="text-2xl"/>},
                { tName: "HTML", icon: <AiFillHtml5 className="text-2xl"/>},
                { tName: "CSS", icon: <FaCss3 className="text-2xl"/>}
            ]
        },
        {
            id: 3,
            name: "Portfolio",
            break: "fully responsive*",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/portfolio.png?raw=true",
            siteLink: "https://e63a9ce5.react-portfolio-27w.pages.dev/",
            codeLink: "https://github.com/lakshan969Github/React-Portfolio.git",
            tech: [
                { tName: "React JS", icon: <FaReact className="text-2xl"/>},
                { tName: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl"/>},
                { tName: "HTML", icon: <AiFillHtml5 className="text-2xl"/>},
            ]
        },
        {
            id: 4,
            name: "Restaurant Website",
            break: "fully responsive*",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/restaurant.png?raw=true",
            siteLink: "https://food-rest.netlify.app/",
            codeLink: "https://github.com/lakshan969Github/Bootstrap-FoodOrdering-Site.git",
            tech: [
                {tName: "Bootstrap", icon: <FaBootstrap className="text-2xl"/>},
                {tName: "Java Script", icon: <TbBrandJavascript className="text-2xl"/>},
                { tName: "HTML", icon: <AiFillHtml5 className="text-2xl"/>},
                { tName: "CSS", icon: <FaCss3 className="text-2xl"/>}
            ]
        },
        {
            id: 5,
            name: "Game",
            break: "",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/weatherApp.PNG?raw=true",
            siteLink: "https://food-rest.netlify.app/",
            codeLink: "https://github.com/lakshan969Github/Bootstrap-FoodOrdering-Site.git",
            tech: [
                {tName: "PHP", icon: <FaPhp className="text-2xl"/>},
                {tName: "Mysql", icon: <SiMysql className="text-2xl"/>},
                {tName: "Java Script", icon: <TbBrandJavascript className="text-2xl"/>},
                { tName: "HTML", icon: <AiFillHtml5 className="text-2xl"/>},
                { tName: "CSS", icon: <FaCss3 className="text-2xl"/>}
            ]
        },
        {
            id: 6,
            name: "Online Banking System",
            break: "",
            image: "https://github.com/lakshan969Github/React-Portfolio/blob/temp/public/images/Projects/weatherApp.PNG?raw=true",
            siteLink: "https://food-rest.netlify.app/",
            codeLink: "https://github.com/lakshan969Github/Bootstrap-FoodOrdering-Site.git",
            tech: [
                {tName: "PHP", icon: <FaPhp className="text-2xl"/>},
                {tName: "Mysql", icon: <SiMysql className="text-2xl"/>},
                {tName: "Java Script", icon: <TbBrandJavascript className="text-2xl"/>},
                { tName: "HTML", icon: <AiFillHtml5 className="text-2xl"/>},
                { tName: "CSS", icon: <FaCss3 className="text-2xl"/>}
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
                    <motion.div 
                        key={project.id}
                        variants={projectAnimation}
                        initial="init"
                        animate="animate"
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: i * 0.3,
                        }}
                        className="flex flex-col drop-shadow-lg bg-white relative rounded-xl overflow-hidden">
                        <div className="max-h-[300px] overflow-hidden p-3 md:p-6 drop-shadow-lg">
                            <img src={project.image} style={styles} className="rounded-xl"/>
                        </div>
                        <div className="px-6 py-3 font-header">
                            <div className="flex items-center">
                                <h1 className="text-3xl mr-2">{project.name}</h1>
                                <span className="text-gray-700 text-sm">{project.break}</span>
                            </div>
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
                        <div className="absolute  right-8 bottom-10 md:bottom-10 flex flex-col w-auto text-[1.1rem] font-header">
                            <motion.a                                
                                animate={{ 
                                    x: -10
                                }}
                                transition={{ 
                                    repeat: Infinity, 
                                    type: 'spring', 
                                    stiffness: 600,
                                    dumping: 100,
                                    duration: 3
                                }}
                                href={project.codeLink} target="_blank" className="flex items-center mb-5 mb:mb-0">
                                <BiCodeAlt className="text-2xl md:text-xl ml-2"/>
                                <span className="hidden md:block">Source Code</span>
                            </motion.a>
                            <motion.a                                
                                animate={{ 
                                    x: -10
                                }}
                                transition={{ 
                                    repeat: Infinity, 
                                    type: 'spring', 
                                    stiffness: 600,
                                    dumping: 100,
                                    duration: 3.3
                                }}
                                href={project.siteLink} target="_blank" className="flex items-center">
                                <AiOutlineFullscreen className="text-2xl md:text-xl ml-2"/>
                                <span className="hidden md:block">View Live</span>
                            </motion.a>

                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
     );
}
 
export default Project;