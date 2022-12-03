import React from 'react'
import styles from './styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Payment() {
  return (
    <div style={{width: '100%', height: '100vh', backgroundColor: 'grey'}}>
      <div className={styles.payment}>
        <ConnectButton />

      </div>
    </div>
  )
}

export default Payment