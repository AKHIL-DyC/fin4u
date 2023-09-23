import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Navbar (){
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>FIN4U</div>
      <div className={styles.linkContainer}></div>
    </div>
  )
}


