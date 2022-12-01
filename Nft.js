import React, { useState } from 'react'
import styles from './styles/Home.module.css'
import nftData from './dummyPremiumNft.json'
import nftData2 from './dummyLesserNft.json'
import Image from 'next/image'
import design from './premiumdesign.png'
import lessDesign from './lessDesign.png'

function Nft() {
  console.log(nftData)
  return (
    <div className={styles.nftCollection}>
      <div>
        <p>Introducing</p>
        <p style={{ fontSize: '2.2rem' }}>Ashland Member Access</p>
      </div>
      <div className={styles.nftStart}>
        <div className={styles.nftColumn}>
          {nftData.map((item, index) => {
            if (index > 3) {
              return
            }
            return (
              <div className={styles.nft} key={`${index}${item.title}`}>
                <Image src={design} width={250} height={250} />
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
            )
          })}
        </div>
        <div className={styles.nftColumn}>
          {nftData2.map((item, index) => {
            if (index > 4) {
              return
            }
            return (
              <div className={styles.nft} key={`${index}${item.title}`}>
                <Image src={lessDesign} width={250} height={250} />
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nft