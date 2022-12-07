import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AshNft from '../components/AshNft'
import Nft from '../components/Nft'
import Benefits from '../components/Benefits'
import peach from '../assets/Peach.png'
import blueberry from '../assets/Blueberry.png'
import strawberry from '../assets/Strawberry.png'
import lemonade from '../assets/Lemonade.png'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
      <div className={styles.poly}>  
       <AshNft />
      </div>
       <Nft/>
       <div className={styles.images}>
       <Image src={strawberry}></Image>
       <Image src={blueberry}></Image>
       <Image src={peach}></Image>
       <Image src={lemonade}></Image>
       </div>
       <Benefits />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
