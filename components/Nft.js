import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import nftData from '../assets/dummyPremiumNft.json'
import nftData2 from '../assets/dummyLesserNft.json'
import Image from 'next/image'
import Link from 'next/link'
import design from '../assets/premiumdesign.png'
import lessDesign from '../assets/lessDesign.png'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import picture from '../assets/premiumdesign.png'
import { motion } from 'framer-motion'

function Nft() {
  const [show, setShow] = useState(false)


  const handleClose = () => setShow(false);


  return (
    <div className={styles.nftCollection}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy this NFT?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're taking the first step in being a part of our family!</Modal.Body>
        <Modal.Footer>
          <Link href={'/CreditCard'}>
            <Button variant="primary" >
              Buy Now
            </Button>
          </Link>
          {/* <Link href={'/CryptoConnect'}></Link> */}
        </Modal.Footer>
      </Modal>
      <div>
        <p>Introducing</p>
        <div className={styles.carouselContainer}>
          {/* <div className={styles.rotatingCarousel}></div>
          <div className={styles.rotatingCarousel}></div>
          <div className={styles.rotatingCarousel}></div>
          <div className={styles.rotatingCarousel}></div>
          <div className={styles.rotatingCarousel}></div>
          <div className={styles.rotatingCarousel}></div> */}
          {/* <motion.div className={styles.rotatingCarousel} initial={{x:0}}  transistion={{duration: 10, repeat: 'infinity'}} animate={{
            x: 100,
          }}/> */}
          {/* <Image src={picture} height={200} width={200} className={styles.rotatingCarousel}></Image> */}
        </div>
        <p style={{ fontSize: '2.2rem' }}>Ashland Member Access</p>
      </div>
      <div className={styles.nftStart}>
        <div className={styles.nftColumn}>
          {nftData.map((item, index) => {
            if (index > 3) {
              return
            }
            if(index == 2){
              return(
              <div className={styles.nftSold} key={`${index}${item.title}`}>
                <Image src={design} width={250} height={250} />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button onClick={() => setShow(true)} disabled={true} className={styles.buyBtn}>Sold</button>
                <div className={styles.soldOut}></div>
              </div>
              )
            }
            return (
              <div className={styles.nft} key={`${index}${item.title}`}>
                <Image src={design} width={250} height={250} />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button onClick={() => setShow(true)} className={styles.buyBtn}>Buy</button>
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
                <button onClick={() => setShow(true)} className={styles.buyBtn}>Buy</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nft