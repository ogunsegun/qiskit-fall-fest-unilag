import React from 'react'
import styles from './App.module.css'

function News() {
    const title = "News"
  return (
  
    <div className={styles.imgcontainer}>
        <h1 style={{ color: 'white' }}>{title}</h1>
      <div className={styles.gridcontainer}>
      <div className={styles.griditem}>
      <h2>University of Lagos IBM Qiskit Fall Fest 2024 - Application Status
      </h2>
      <h4>Congratulations you have been selected to host an EXTENSION 2024 Qiskit Fall Fest!</h4><br/>
      <p><b>What does this mean? </b><br />
        You will work closely with IBM Quantum staff to create a workshop, challenge, hackathon, social 
        event, coding competition or other types of events with your own campus or organization!
        <br /> 
        <b>What should I expect?</b><br/>
        Expect exclusive graphics, seminars throughout the month of September with IBM Quantum speakers, 
        new material, training sessions, and more! If you need a refresher, feel free to review the attached informational guide.
       <br />
       <a className={styles.Linkapp}  href='https://chat.whatsapp.com/CKGNi2h0liHG5xI8LreFKF'> Join the Whatsapp communit!
      </a></p>
      </div>
      
      <div className={styles.griditem}>
      <h2>Qiskit 1.2v</h2> 
      <h4>Print Hello World</h4>
      <br />
      <p>You will first create a simple quantum program and run it on a quantum processing unit (QPU). 
      Because actual quantum research requires much more robust programs, in the second section (Scale 
      to large numbers of qubits), you will scale the simple program up to utility level. 
      You can also follow along with the Hello World episode of the Coding with Qiskit 1.0 
      video series.
       <br />
      <a className={styles.Linkapp}  href='https://docs.quantum.ibm.com/guides/hello-world'> Read more!
      </a></p>
      </div>

      <div className={styles.griditem}>
      <h2>Qiskit Serverless sets the stage for Qiskit Functions in the cloud</h2>
      <h4>With Qiskit Serverless, users can build, deploy, and run workloads 
        remotely using the compute resources of IBM Quantum™ platform</h4><br/>
      <p>Qiskit Serverless has reached a new stage of maturity. We first introduced the concept 
        of serverless quantum computing in 2021, and since then, we've been working hard to bring
         that concept to life. This work is essential because Qiskit Serverless will soon form the 
         foundation for Qiskit Functions — powerful, pre-built workflows that allow researchers 
         and developers to interact with quantum computers at a higher level of abstraction than 
         ever before.
       <br />
      <a className={styles.Linkapp}  href='https://www.ibm.com/quantum/blog/qiskit-serverless'> Read more!
      </a></p>
      </div>

      <div className={styles.griditem}>
      <h2>The most popular quantum software, now even more powerful</h2>
      <h4>Learn about Quantum Computing </h4>
      <p>An open-source python framework for quantum programming which is qiskit you can Learnmore about
        quantum computing on <i>osspi quantum computing</i>
       <br />
      <a className={styles.Linkapp}  href='https://www.youtube.com/@osspi'>Watch videos
      </a></p>
      </div>
      </div>
    
    </div>
  )
}

export default News
