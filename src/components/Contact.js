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


const Contact = () => {
    return ( 
        <motion.div
            variants={pageLoaded}
            initial= "hidden"
            animate= "visible"
        >
            <h1>This is the Contact</h1>
        </motion.div>
     );
}
 
export default Contact;