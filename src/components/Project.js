import { motion } from "framer-motion";

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
                <div>
                    <div>
                        <img src=""/>
                    </div>
                    <div>
                        <h1></h1>
                        <p></p>
                    </div>
                    <a href="/"/>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Project;