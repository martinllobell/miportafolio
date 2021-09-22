import { motion } from "framer-motion";
import React from "react";
import styles from './projects.module.scss'
import cardfondo from '../../assets/proyectos/countires/cardfondo.png'
import cardfondo2 from '../../assets/proyectos/yoagronomo/cardfondo.png'
import cardfondo3 from '../../assets/proyectos/carrusel/cardfondo.png'

const projectsVariants = {
    hidden:{
        opacity:0,
        y:'50vh'
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
const cardVariants={
    hidden:{
        opacity:0,
    },
    show: {
        opacity:.8,
        transition:{
            type:'spring',
            stiffness:100
        }
    },
    exit:{
        opacity:0,
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
const contCardVariants={
    hidden:{
        x:'-50vw',
        opacity:0,
    },
    show: {
        opacity:1,
        x:0,
        transition:{
            type:'spring',
            stiffness:30
        }
    },
    exit:{
        opacity:0,
        x:'-50vw',
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
export default function Projects(){
    return(
        <motion.div className={styles.contMain} variants={projectsVariants} initial='hidden' animate='show' exit='exit'>
            <h2 className={styles.h2Projects}>Proyectos</h2>
            <motion.div className={styles.contProject} variants={contCardVariants} initial='hidden' animate='show' exit='exit'>
                <motion.div className={styles.countries} variants={cardVariants} initial='hidden' animate='show' exit='exit'>
                    <img className={styles.imgCard} src={cardfondo} alt=''/>
                    <div className={styles.ghostdiv}>
                        <h2 className={styles.h2Card}>My Countries App</h2>  
                    </div>
                </motion.div>
                <motion.div className={styles.yoagronomo} variants={cardVariants} initial='hidden' animate='show' exit='exit'>
                    <img className={styles.imgCard} src={cardfondo2} alt=''/>
                    <div className={styles.ghostdiv}>
                        <h2 className={styles.h2Card}>Yo-Agrónomo</h2>  
                    </div>
                </motion.div>
                <motion.div className={styles.carrusell} variants={cardVariants} initial='hidden' animate='show' exit='exit'>
                    <img className={styles.imgCard} src={cardfondo3} alt=''/>
                    <div className={styles.ghostdiv}>
                        <h2 className={styles.h2Card}>Carousell</h2>  
                    </div>
                </motion.div>
            </motion.div>
            <div className={styles.contDivsprueba}>    
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                    </div>
        </motion.div>
    )
}