import React from 'react'
import { Link } from 'react-router-dom';
import styles from './App.module.css';

function Btnreg() {
  return (
      <div className={styles.btncontainer}>
        <Link to="/Register">
        <button className={styles.btn}>
          <h3>REGISTER FOR THE EVENT HERE 
          TO PARTICIPATE!</h3>
        </button>
        </Link>
      </div>
  )
}

export default Btnreg
