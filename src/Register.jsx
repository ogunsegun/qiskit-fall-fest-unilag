import React from 'react'
import styles from './App.module.css';

function Register() {
  const title = "Register";
    
  return (
    <div className={styles.imgcontainer}>
      <h1 style={{ color: 'white' }}>{title}</h1>
      <h3 style={{ color: 'white' }}>To participate! Join the community</h3>
      <a className={styles.Linkapp}  href='https://chat.whatsapp.com/CKGNi2h0liHG5xI8LreFKF'> Join the Whatsapp community! 
      </a>
      <br /> <br />
     <h3>Open to Everyone<sub><i> powered by osspi</i></sub></h3>
    </div>
  )
}

export default Register
