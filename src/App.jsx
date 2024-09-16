import React from 'react'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import  {BrowserRouter, Router, Routes, Route} from "react-router-dom"
import About from './About'
import TheEvent from './TheEvent'
import Navbar from './Navbar'
import News from './News'
import styles from './App.module.css';
import Register from './Register'
import Home from './Home'

function App() {

  return (
    <>
    <div className={styles.container}>
    <Navbar />
     {/* <BrowserRouter >  */}
     <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/theevent" element={<TheEvent />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     </Router> 
    {/* </BrowserRouter>  */}
    
    </div>
    
    </>
  )
}

export default App
