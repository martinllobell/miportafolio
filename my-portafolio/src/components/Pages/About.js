import React from "react";
import { motion } from "framer-motion";
import './Pages.css'
import styles from './about.module.scss'
import { Link } from "react-router-dom";

const aboutVariants = {
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
export default function About(){
    return(
        <motion.div className='about-cont' variants={aboutVariants} initial='hidden' animate='show' exit='exit'>
            <div className='about-subcont'>
                <h1 className='h1-about'>MARTÍN LLOBELL</h1>
                <div className='foto-perfil'/>
            </div>
            <div className='about-description'>
                <h2 className='h2-description'>Sobre mi...</h2>
                <p className='p-description'>Soy desarrollador de aplicaciones web, me apasiona la computación y todas sus ramas. En definitiva adoro el mundo IT. Me gusta mucho el diseño y soy muy perfeccionista, es difícil que quede conforme con un resultado sabiendo que se puede mejorar! Adoro el orden, la organización y el trabajo en equipo. A demás soy músico, toco la guitarra y el piano, unos de mis géneros preferidos son el Hard Rock y el Metal</p>
                <Link path to='/skills' className='btn-description'>Ver Aptitudes</Link>
            </div>
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