import React from 'react'
import styles from './App.module.css'


function TheEvent() {
    const title ="The Event"
  return (
    <div className={styles.imgcontainer}>
      <h1 style={{ color: 'white' }}>{title}</h1>
        <div className={styles.btn}>
        <h1>It All About Quantum!</h1> 
        <h3>Quantum 101 kick off on <i>start Oct 20th</i></h3>
        <p><b>EXTENSION IBM QISKIT FALL FEST '24 </b><br/><br />
           It will be host Virtual! <br/>

           <a className={styles.Linkapp} href='https://chat.whatsapp.com/CKGNi2h0liHG5xI8LreFKF' >Click Here for the link </a>
           
           </p>
           
      </div>
      <div className={styles.unilag}>
        <h1>20<sup><small>th</small></sup> of Oct  3:00PM - 6:00PM <sub><small>(WAT)</small></sub></h1>
        <h3>INTRO TO QUANTUM COMPUTING AND APPLICATIONS</h3>
        <ul>
            <li>Opening ceremony</li>
            <li>Fundamentals of quantum computation theory: 
              ciruit model and quantum gates
            </li>
            <li>Quantum algorithms and application</li>
     </ul>
     <a className={styles.Linkapp} href='/qiskit-fall-fest-unilag/Register' >Register Now!</a>
     <br /> <br />

     <h1>24<sup><small>th</small></sup> of Oct  3:00PM - 6:00PM <sub><small>(WAT)</small></sub></h1>
        <h3>HANDS ON SESSION</h3>
        <ul>
            <li>First steps with Qiskit and quantum circuits</li>
            <li>Fundamentals of python programming 
            </li>
            <li>Implementation of quantum algorithms</li>
     </ul>
     <a className={styles.Linkapp} href='/qiskit-fall-fest-unilag/Register' >Register Now!</a>
     <br /> <br />

     <h1>25<sup><small>th</small></sup> of Oct  3:00PM - 6:00PM <sub><small>(WAT)</small></sub></h1>
        <h3>HANDS ON SESSION</h3>
        <ul>
            <li>Implementation of quantum algorithms(2)</li>
            <li>"Are you ready for a challenge?"</li>
     </ul>
     <a className={styles.Linkapp} href='/qiskit-fall-fest-unilag/Register' >Register Now!</a>
     <br /> <br />

     <h1>27<sup><small>th</small></sup> of Oct  3:00PM - 6:00PM <sub><small>(WAT)</small></sub></h1>
        <h3>CHALLENGE AND ADVANCED</h3>
        <ul>
            <li>Challenge review</li>
            <li>Qantum game theory</li>
            <li>Qisk-symb</li>
            <li>Closing ceremony</li>
     </ul>
     <a className={styles.Linkapp} href='/qiskit-fall-fest-unilag/Register' >Register Now!</a>
     <br /> <br />
      </div>
      
      
    </div>
    
  )
}

export default TheEvent
