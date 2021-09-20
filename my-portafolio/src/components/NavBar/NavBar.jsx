import React, { useState } from 'react'
import styles from './NavBar.module.css'
import ico from '../../assets/arrow.png'

export default function NavBar (){
    const [footer, setFooter] = useState(false)
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.ico}/>
                <div className={styles.contLinks}>
                    <h4 className={styles.link}>Sobre mi</h4>
                    <h4 className={styles.link}>Aptitudes</h4>
                    <h4 className={styles.link}>Proyectos</h4>
                    <h4 className={styles.link}>Contacto</h4>
                </div>
            </div>
            <div className={styles.contFooter}>
                <div onClick={()=>{setFooter(false)}} className={footer?styles.footerCancel:styles.none}></div>
                <div onClick={()=>{!footer?setFooter(true):setFooter(false)}} className={footer?styles.footerIcoAct:styles.footerIco} data-tooltip={ico} />
                <div className={footer?styles.ghostFooter:styles.ghostFooterDesactivate}>
                    <div className={styles.githubL}/>
                    <div className={styles.gmailL}/>
                    <div className={styles.linkedinL}/>
                    <div className={styles.whatsappL}/>
                </div>
            </div>
        </div>

    )
}