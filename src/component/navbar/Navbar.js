import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import cover from 'public/cover.avif'

export default function Navbar (){
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>FIN4U</div>
      <div className={styles.linkContainer}>
      <Link href='/'>Home</Link>
      <Link href='/chatbot'>Chat</Link>
      <Link href='/rate'>Rate</Link>
      <Link href='/news'>News</Link>
      <Link href='/about'>About</Link>
      </div>
    </div>
  )
}


