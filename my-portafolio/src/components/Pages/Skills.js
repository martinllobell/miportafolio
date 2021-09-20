import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from './skills.module.scss'
/////////////////
import css from '../../assets/icons/css.png'
import git from '../../assets/icons/git.png'
import github from '../../assets/icons/github.png'
import html from '../../assets/icons/html.png'
import javascript from '../../assets/icons/javascript.png'
import nginex from '../../assets/icons/nginex.png'
import nodejs from '../../assets/icons/nodejs.png'
import postgres from '../../assets/icons/postgres.png'
import react from '../../assets/icons/react.png'
import redux from '../../assets/icons/redux.png'
import sass from '../../assets/icons/sass.png'
////////////////////
import auto from '../../assets/aptitudes/auto-suficiente.png'
import comunicacion from '../../assets/aptitudes/comunicacion.png'
import learn from '../../assets/aptitudes/learn.png'
import proactivo from '../../assets/aptitudes/proactivo.png'
import solucion from '../../assets/aptitudes/solucion-problemas.png'
import team from '../../assets/aptitudes/team-work.png'



const skillsVariants = {
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
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
const tecnologiasVariants = {
    hidden:{
        opacity:0,
        x:'100vw'
    },
    show:{
        opacity:1,
        x:0,
        zIndex:5,
        transition:{
            type:'spring',
            stiffness:50
        }
    },
    exit:{
        opacity:0,
        x:'-100vw',
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
const aptitudesVariants = {
    hidden:{
        opacity:0,
        x:'100vw'
    },
    show:{
        opacity:1,
        x:0,
        zIndex:5,
        transition:{
            type:'spring',
            stiffness:500
        }
    },
    exit:{
        opacity:0,
        x:'-100vw',
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
export default function Skills(){

    const [skills, setSkills] = useState('')

    return(
        <motion.div  className='skills-cont' variants={skillsVariants} initial='hidden' animate='show' exit='exit'>
            <h2 className='skills-h2'>{skills==''?'Tecnologías':'Aptitudes Personales'}</h2>
            <button onClick={()=>{skills===''?setSkills('personal'):setSkills('')}} className='btn-switcher'/>
            {
                skills===''?
                <motion.div className={'skills-tecnologias'} variants={tecnologiasVariants} initial='hidden' animate='show' exit='exit' layout>
                    <h3 className='h3-tecnologias'>Algunas tecnologías que domino...</h3>
                    <div className='cont-tecngologias'>
                        <div className='react'>
                            <img src={react} alt=''/>
                        </div>
                        <div className='redux'>
                            <img src={redux} alt=''/>
                        </div>
                        <div className='css'>
                            <img src={css} alt=''/>
                        </div>
                        <div className='html'>
                            <img src={html} alt=''/>
                        </div>
                        <div className='sass'>
                            <img src={sass} alt=''/>
                        </div>
                        <div className='nodejs'>
                            <img src={nodejs} alt=''/>
                        </div>
                        <div className='nginex'>
                            <img src={nginex} alt=''/>
                        </div>
                        <div className='postgres'>
                            <img src={postgres} alt=''/>
                        </div>
                        <div className='git'>
                            <img src={git} alt=''/>
                        </div>
                        <div className='javascript'>
                            <img src={javascript} alt=''/>
                        </div>
                    </div>
                </motion.div>
            :
                <motion.div className={'skills-personales'} variants={tecnologiasVariants} initial='hidden' animate='show' exit='exit'>
                        <img className='auto' src={auto} alt=''/>
                        <img className='team' src={team} alt=''/>
                        <img className='proactivo' src={proactivo} alt=''/>
                        <img className='solucion' src={solucion} alt=''/>
                        <img className='learn' src={learn} alt=''/>
                        <img className='comunicacion' src={comunicacion} alt=''/>
                </motion.div>
            }
            
             {/* ////// particles //////// */}
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