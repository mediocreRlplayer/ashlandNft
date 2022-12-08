import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import design from '../assets/premiumdesign.png'
import Image from 'next/image'
import Link from 'next/link'
import UserInput from '../components/UserInput'
import Credit from '../components/Credit'
import Crypto from '../components/Crypto'
import Modal from 'react-bootstrap/Modal'

function CreditCard() {
  const [user, setUser] = useState({ user: true, crypto: false, cc: false })
  const [show, setShow] = useState(false)
  return (
    <div className={styles.creditPage}>
      <div className={styles.leftCheckout}>
        <Link href={'/'}>Home</Link>
        <h1>Exclusive Collectible</h1>
        <p>$2000.00</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          In nisi mollitia aspernatur. Officia possimus, eum, nesciunt optio voluptatibus
          accusantium temporibus officiis tempora maiores quod porro earum, id hic sed
          architecto harum? Voluptates, odio aliquid quisquam corrupti officiis autem earum modi!
        </p>

        <Image src={design} />
      </div>
      <div className={styles.rightCheckout}>
        <Modal show={show}>
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <Modal.Title>At Ashland you have a choice of how to pay</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <button className={styles.btn} onClick={() => {
              setShow(false)
              setUser({ user: false, cc: true })
            }
            }>
              Buy with Credit Card
            </button>
            <button className={styles.btn} onClick={() => {
              setShow(false)
              setUser({ user: false, crypto: true })
            }
            }>            Buy with Crypto
            </button>
          </Modal.Footer>
        </Modal>
        <div className={styles.mobileLink}>
        <Link href={'/'} >Home</Link>
        </div>
        {(user.user) ?
          <>
            <UserInput />
            <button className={styles.btn} onClick={() => setShow(true)}>Continue to checkout</button>
          </>
          :
          (user.crypto) ?
            <>
              <Crypto />
              <button className={styles.btn} onClick={() => setUser({user: true, crypto: false})}>Pay</button>

            </>
            :
            <>
              <Credit />
              <button className={styles.btn} onClick={() => setUser({user: true, cc: false})}>Pay</button>
            </>
        }
      </div>
    </div>
  )
}

export default CreditCard