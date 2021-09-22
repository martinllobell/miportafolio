import React, { useState } from 'react'
import styles from './NavBar.module.css'
import ico from '../../assets/arrow.png'
import { Link } from 'react-router-dom'

export default function NavBar (){
    const [footer, setFooter] = useState(false)
    return (
        <div>
            <div className={styles.navbar}>
                <Link to='/' className={styles.ico}/>
                <div className={styles.contLinks}>
                    <Link to='/about'className={styles.link}>Sobre mi</Link>
                    <Link to='/skills' className={styles.link}>Aptitudes</Link>
                    <Link to='/projects' className={styles.link}>Proyectos</Link>
                    <Link to='/contact' className={styles.link}>Contacto</Link>
                </div>
            </div>
        </div>

    )
}