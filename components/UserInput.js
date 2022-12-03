import React from 'react'

function UserInput() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <h1>Shipping Address</h1>
        <label htmlFor="fname">First Name</label>
        <input type="text" name='fname' id='fname' placeholder='First Name' />
        <label htmlFor="lname">First Name</label>
        <input type="text" name='lname' id='lname' placeholder='Last Name' />
        <label htmlFor="address">Address</label>
        <input type="text" name='address' id='address' placeholder='Address'/>
        <label htmlFor="address2">Address Line 2 (Optional)</label>
        <input type="text" name='address2' id='address2' placeholder='Address Line 2'/>
        <label htmlFor="zip">Zipcode</label>
        <input type="text" name='zip' id='zip' placeholder='Zipcode'/>
        <label htmlFor="state">State</label>
        <select name="state" id="state">
          <option value="az" default={true}>Arizona</option>
          <option value="al">Alaska</option>
          <option value="ne">Nebraska</option>
          <option value="oh">Ohio</option>
        </select>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name='phone' id='phone' placeholder='Phone Number'/>
        <label htmlFor="email" style={{textAlign: 'left'}}>Email</label>
        <input type="email" name="email" id="email" placeholder='Email' />
    </div>
  )
}

export default UserInput