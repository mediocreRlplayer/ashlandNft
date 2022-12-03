import React from 'react'
import styles from '../styles/Home.module.css'
function Credit() {
  return (
    <>
      <h1>Payment Information</h1>
      <form action="" className={styles.creditForm}>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          {/* <input type="radio" name="card" id="visa" value="visa" />
      <label htmlFor="visa">Visa</label>
      <input type="radio" name="card" id="mastercard" value="mastercard" />
      <label htmlFor="mastercard">Mastercard</label>
      <input type="radio" name="card" id="discover" value="discover" />
      <label htmlFor="discover">Discover</label> */}
          <label htmlFor="card">Select Card</label>
          <select name="card" id="card">
            <option value="visa" default={true}>Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="AMEX">AMEX</option>
            <option value="Discover">Discover</option>
          </select>
        </div>

        <label htmlFor="cc">Credit Card Number</label>
        <input type="text" name='cc' placeholder='Credit Card Number' />
        <label htmlFor="expireMM">Expiry Date</label>
        <div style={{ display: "flex" }}>
          <select name="expireMM" id="expireMM">
            <option value=''>Month</option>
            <option value='01'>January</option>
            <option value='02'>February</option>
            <option value='03'>March</option>
            <option value='04'>April</option>
            <option value='05'>May</option>
            <option value='06'>June</option>
            <option value='07'>July</option>
            <option value='08'>August</option>
            <option value='09'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
          <select name='expireYY' id='expireYY'>
            <option value='' >Year</option>
            <option value='23'>2023</option>
            <option value='24'>2024</option>
            <option value='25'>2025</option>
            <option value='26'>2026</option>
            <option value='27'>2027</option>
          </select>
          <input class="inputCard" type="hidden" name="expiry" id="expiry" maxlength="4" />
        </div>
        <label htmlFor="cvv">CVV</label>
        <input type="text" name='cvv' style={{ width: '33%' }} placeholder="CVV" />
      </form>
    </>
  )
}

export default Credit