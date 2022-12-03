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

function Nft() {
  const [show, setShow] = useState(false)
  const [showCrypto, setCryptoShow] = useState(false)
  const [showCC, setCCShow] = useState(false)


  const handleClose = () => setShow(false);
  const handleCryptoClose = () => setCryptoShow(false);
  const handleCCClose = () => setCCShow(false);
  const handleShow = () => setShow(true);
  const handleCCShow = () => {
    setShow(false)
    setCCShow(true)
  }
  const handleCryptoShow = () => {
    setShow(false)
    setCryptoShow(true)
  }

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
              Buy with Credit Card
            </Button>
          </Link>
          {/* <Link href={'/CryptoConnect'}></Link> */}
          <Button variant="primary" onClick={handleCryptoShow}>
            Buy with Crypto
          </Button>
        </Modal.Footer>
      </Modal>
      {(showCrypto) ?
        <Modal show={showCrypto} onHide={handleCryptoClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pay with Tokens</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <select name="tokens" id="">
              <option value="ETH" default={true}>ETH</option>
              <option value="DAI">DAI</option>
              <option value="USDC">USDC</option>
              <option value="Polygon">Polygon</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => handleCryptoClose()}>Buy</Button>
          </Modal.Footer>
        </Modal>
        : ""}
      {(showCC) ?
        <Modal show={showCC} onHide={handleCCClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Credit Card details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input type="text" placeholder='Credit Card Number' />
            </div>
            <label htmlFor="exp">Expiration Date</label>
            <input type="date" placeholder='Expiration Date' name='exp' />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCCClose}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>
        : ""}
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
                <button onClick={() => setShow(true)}>Buy</button>
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
                <button onClick={() => setShow(true)}>Buy</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nft