import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import design from '../assets/premiumdesign.png'
import Image from 'next/image'
import Link from 'next/link'
import UserInput from '../components/UserInput'
import Credit from '../components/Credit'

function CreditCard() {
  const [user, setUser] = useState(false)
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
        {(user) ?
          <>
            <UserInput />
            <button className={styles.btn} onClick={() => setUser(false)}>Continue to checkout</button>
          </>
          :
          <>
            <Credit />
            <button className={styles.btn} onClick={() => setUser(true)}>Pay</button>
          </>
        }
      </div>
    </div>
  )
}

export default CreditCard