import React from 'react'
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../button/Button'

import styles from './Navbar.module.css'

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  function handleClick() {
    setMenu(!menu)
  }
  return (
    <nav className={styles.navBar}>
      <Link to={'/'}><img src="https://1000logos.net/wp-content/uploads/2021/07/Michigan-State-Spartans-logo.png" /></Link>

      <ul className={styles.listItems}>
        <li><Link to={'/'} className={styles.link}>Home</Link></li>
        <li><Link to={'/about'} className={styles.link}>AboutUs</Link></li>
        <li><Link to={"/program"} className={styles.link}>Programs</Link></li>
        <li><Link to={'/trainer'} className={styles.link}> Trainers</Link></li>
        <li><Link to={'/pricing'} className={styles.link}>Pricing</Link></li>
        <Link to={'/signin'}><Button name='Join Us' /></Link> 
      </ul>
      
      <div className={styles.menuContainer}>
        <MdMenu style={{ fontSize: 40 }} className={styles.menu} onClick={() => handleClick()} />
        {
          menu &&
          <ul className={styles.hiddenMenu}>
            <li><Link to={'/'} className={styles.link}>Home</Link></li>
            <li><Link to={'/about'} className={styles.link}>AboutUs</Link></li>
            <li><Link to={"/program"} className={styles.link}>Programs</Link></li>
            <li><Link to={'/trainer'} className={styles.link}> Trainers</Link></li>
            <li><Link to={'/pricing'} className={styles.link}>Pricing</Link></li>
            <Link to={'/joining'}><Button name='Join Us' /></Link>
          </ul>
        }
      </div>
    </nav>
  )
}
