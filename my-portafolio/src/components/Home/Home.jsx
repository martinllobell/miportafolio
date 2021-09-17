import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import NavBar from '../NavBar/NavBar'

export default function Home(){

    const[indexScroll, setIndexScroll] = useState(0)
    useEffect(()=>{
        setIndexScroll(document.body.scrollHeight)
    },[])
    function btnscroll(){
        window.scroll({
            top: indexScroll/4,
            behavior: 'smooth'
          });
    }

    return (
        <div className={styles.contPrincipal}>
            <NavBar/>
            <div className={styles.cont}>
                <div className={styles.home1}>
                    <div className={styles.contTitles}>
                        <h4 className={styles.title2}/>
                    </div>
                    <segment className={styles.contBtnInfo}>
                        <button onClick={btnscroll} className={styles.btnMas}>{`</>`}</button>
                    </segment>
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
                </div>
                <div className={styles.home2}>
                    <section className={styles.sectionImg}>
                        <img className={styles.imgPerfil}/>
                    </section>
                </div>
                <div className={styles.home3}>
                </div>
                <div className={styles.home4}>
                </div>
            </div>
        </div>
    )
}