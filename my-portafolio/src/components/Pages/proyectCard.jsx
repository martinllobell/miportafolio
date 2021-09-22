import { motion } from "framer-motion";
import React from "react";  


const skillsVariants = {
    hidden:{
        opacity:0,
        y:'-50vh'
    },
    show: {
        opacity:1,
        y:0,
        transition:{
            type:'spring',
            stiffness:100
        }
    },
    exit:{
        opacity:0,
        y:'-50vh',
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}

export default function CardProject({name, description, img}){
    return (
        <motion.div className={styles.fullScreenP} variants={skillsVariants} initial='hidden' animate='show' exit='exit'>
            
        </motion.div>
    )

}