import React from 'react'
import styles from '../styles/Home.module.css'

function AshNft() {
  return (
    <div>
      <div className={styles.ashMembers}>
        <div className={styles.ashAbout}>
          <p>
            Ashland Hard Seltzer is a brand built by people from all walks of life;
            unique individuals with one thing in common – an unwavering passion for their craft. It was our goal at Ashland to create an unparalleled craft hard
            seltzer to bring people of all walks of life together, to share moments
            and create new stories.
          </p>
          <p>Moments are fleeting. Stories live forever.</p>
          <p style={{fontSize: '1.3rem'}}>Now you can be a part of our family with our digital collection</p>
        </div>
      </div>
      {/* <div className={styles.waves2}></div>
      <div className={styles.waves}></div> */}
    </div>
  )
}

export default AshNft