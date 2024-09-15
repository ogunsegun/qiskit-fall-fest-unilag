import React from 'react'
import img from './assets/mypic.jpeg'
import img1 from './assets/q1.jpeg'
import img2 from './assets/qiskit.jpeg';
import img3 from './assets/SAM.jpeg';
import img4 from './assets/majiri.jpeg';
import styles from './App.module.css';
import Info from './assets/icons/info.svg?react';
import Btnreg from './Btnreg';

//import { ReactComponent as Earth } from './assets/icons/earth-americas.svg';


function About() {
  
  return (
    <div className={styles.imgcontainer}>
      <img src={img1} className={styles.imgfull}></img>
      <h1 style={{ color: 'white' }}>About Qiskit Fall Fest '24</h1>
      <div className={styles.imgtext}>
        <h1>Qiskit Fall Fest</h1>
         
        <p>Qiskit Fall Fest is a collection of quantum computing events that invites students, 
          researchers and industry professionals around the world to participate in a wide array 
          of quantum-themed activities, ranging from quantum challenges, hackathons, and coding 
          competitions to workshops, social events, and more. With each Qiskit Fall Fest, we 
          partner with a select group of university students and other volunteer hosts to help 
          them plan and run the global roster of Fall Fest events. This year's event theme, 
          <b> World of Quantum</b>, celebrates the international scope of the event series and the 
          rapid growth of the global quantum community.<br />
          <a className={styles.Linkapp} 
          href='/https://www.ibm.com/quantum/blog/qiskit-fall-fest-2024' >Read more!</a>
          </p>
      </div>
      
       {/* <!--Grid setion --> */}
     <div className={styles.gridcontainer}>
        <div className={styles.griditem}>
        {/* <Info height="35px" width="35px"/> */}
        <img src={img2} className={styles.imgfull2}></img>
        <h5>What is Qiskit</h5>
        <p>An open-source python framework for quantum programming.
        Qiskit is the world’s most popular software stack for quantum computing, 
        with over 2,000 forks, over 8,000 contributions, and over 3 trillion circuits run.
         <br />
        <a className={styles.Linkapp}  href='https://www.ibm.com/quantum/qiskit'> Learn more!
        </a></p>
        </div>
        
        <div className={styles.griditem}>
        <img src={img} className={styles.imgfull2}></img>
        <h5>Oguntunnbi Segun </h5>
        <p>OSSPI QC 
         <br />
        <a  className={styles.Linkapp} href='https://github.com/ogunsegun'> Github
        </a></p>
        </div>

        <div className={styles.griditem}>
        <img src={img3} className={styles.imgfull2}></img>
        <h5>Sam Ayodeji</h5>
        <p>Scholar
         <br />
        <a className={styles.Linkapp}  href='https://www.linkedin.com/in/sam-ayodeji-analyst/'> Linkedin
        </a></p>
        </div>

        <div className={styles.griditem}>
        <img src={img4} className={styles.imgfull2}></img>
        <h5>Lorraine Tsitsi Majiri</h5>
        <p>President at OneQuantum Africa
         <br />
        <a className={styles.Linkapp}   href='https://www.linkedin.com/in/lorraine-tsitsi-majiri-b720301b1'> Linkedin
        </a></p>
        </div>
      
       
      </div>  
      
   
    </div>
    
  )
}

export default About
