import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import NavBar from '../NavBar/NavBar'
import {motion} from 'framer-motion'
import {ghostDivMotionVariants, btnGhostMotion} from './variantsMotion'
import {Link} from 'react-router-dom'

export default function Home(){
    const [ghost, setGhost] = useState('')
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
                    <section className={styles.contRedes}>
                        <div onClick={()=>{setGhost('')}} className={ghost===''?styles.none:styles.ghotsdesactivate}/>
                        <motion.div className={styles.contLinksRedes} variants={ghostDivMotionVariants} initial='hidden' animate={ghost} exit='exit'>
                            <div className={styles.githubL}></div>
                            <div className={styles.gmailL}></div>
                            <div className={styles.whatsappL}></div>
                            <div className={styles.linkedinL}></div>
                        </motion.div>
                        <motion.button onClick={()=>{ghost==''?setGhost('show'):setGhost('')}} className={ghost==''?styles.btnRedes:styles.btnRedesDes}><h4 className={styles.redesH4}>Redes Sociales!</h4></motion.button>
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