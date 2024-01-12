import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Script from 'next/script'


export default function Home() {
  return (
    <main className={styles.main}>
   {/* <Script src='/sc.js'></Script> */}

   <nav className={styles.navbar}>
    <ul>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </ul>
   </nav>
   <h1>HUNTINGXODERS</h1>
    
    <div className={styles.blogs}>
      <h1>Popular blogs</h1>
     <div>
      <h2>how to learn js in 2022</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis veniam blanditiis magnam obcaecati culpa voluptates id enim quasi eius?</p>
     </div>
     <div className={styles.blog}>
      <h2>how to learn js in 2022</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis veniam blanditiis magnam obcaecati culpa voluptates id enim quasi eius?</p>
     </div>
     <div className={styles.blog}>
      <h2>how to learn js in 2022</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis veniam blanditiis magnam obcaecati culpa voluptates id enim quasi eius?</p>
     </div>
     <div className={styles.blog}>
      <h2>how to learn js in 2022</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis veniam blanditiis magnam obcaecati culpa voluptates id enim quasi eius?</p>
     </div>
     <div className={styles.blog}>
      <h1>how to learn js in 2022</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis veniam blanditiis magnam obcaecati culpa voluptates id enim quasi eius?</p>
     </div>



    </div>
    
    </main>
  )
}
