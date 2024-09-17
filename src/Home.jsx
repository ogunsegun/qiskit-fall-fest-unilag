import React from 'react'
import img from './assets/q1.jpeg'
import img2 from './assets/q2.jpeg';
import styles from './App.module.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.imgcontainer}>
        <div className={styles.imgtext}>
        <h1>Welcome to Qiskit Fall Fest '24! </h1> 
        <h3>It All About Quantum!</h3>
        <p><b>EXTENSION IBM QISKIT FALL FEST '24 <i>start Oct 20th</i></b><br/><br />
           Before going into the basics of quantum technology, 
           let's first address the question; what is quantum 
           mechanics also synonymous with quantum physics?<br/><br />

           <Link className={styles.Linkapp} to='/TheEvent' >Click Here For The Event Details</Link>
           
           </p>
        <img src={img2} className={styles.imgfull}></img>   
      </div>
      <div className={styles.unilag}>
        <h1>Unilag Quantum Computing Club</h1>
        <h3>Nigeria's Quantum Computing "QNigeria</h3>
        <p>Are you ready to join the world revolution technology called <i>Quantum Computing</i>
        Then join us! We are UnilagQCC. Ready to embark on the world of quantum computing?<br /></p>
        <ul>
            <li>Master Python programming basics.</li>
            <li>Learn to code with hands-on exprience</li>
            <li>Explore the powerful Quantum framework with Qiskit</li>
            <li>Earn a certificate upon completion and enjoy exclusive gifts and freebies!</li>
     </ul>
     <Link className={styles.Linkapp} to='/Register' >Register Now!</Link>
     <br /> <br />
     <h3>Open to Everyone<sub><i> powered by osspi</i></sub></h3>
      </div>
      
    </div>
    
  )
}

export default Home
