import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import NavBar from '../NavBar/NavBar'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export default function Home(){

    // const[indexScroll, setIndexScroll] = useState(0)
    // useEffect(()=>{
    //     setIndexScroll(document.body.scrollHeight)
    // },[])
    // function btnscroll(){
    //     window.scroll({
    //         top: indexScroll/4,
    //         behavior: 'smooth'
    //       });
    // }
    const contVariables = {
        hidden:{
            opacity: 0,
            y:'-10vh'
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                stiffness:30
            }
        },
        exit:{
            y:'-100vh',
            transition:{
                ease:'easeInOut',
                duration: 0.5
            }
        }
    }

    return (
        <motion.div className={styles.contPrincipal} variants={contVariables} initial='hidden' animate='show' exit='exit'>
            <div className={styles.cont}>
                <div className={styles.home1}>
                    <div className={styles.contTitles}>
                        <h4 className={styles.title2}/>
                    </div>
                    <segment className={styles.contBtnInfo}>
                        <Link path to='/about' className={styles.btnMas}>{`</>`}</Link>
                    </segment>
                    <section className={styles.contCV}>
                        <h4 className={styles.textCV}>Descargar CV</h4>
                        <a  className={styles.btnCV} href={'../../assets/CVLlobellEspañol.pdf'} download="CVLlobellEspañol.pdf"/>
                    </section>
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
                    <h1 className={styles.title}> © Martín Llobell (todos los derechos resevados)</h1>
                </div>
            </div>
        </motion.div >
    )
}