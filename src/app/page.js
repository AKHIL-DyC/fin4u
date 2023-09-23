import Image from 'next/image'
import styles from './page.module.css'
import cover from 'public/cover.avif'

export default function Home() {
  return (
    <>
    <div className={styles.main}> 
    <div className={styles.textcontainer}>
      Fin4U
      <div className={styles.subtextcontainer}>
      The Financial support for you
      </div>
    </div>
    <div className={styles.imagecontainer}>
    <Image src={cover} className={styles.img} alt="college"></Image>
    </div>
    </div>
    </>
  )
}
