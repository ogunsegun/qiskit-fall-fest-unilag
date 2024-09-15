import { useState } from 'react'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  {BrowserRouter, Link, Routes, Route} from "react-router-dom"
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<div>
      <Home />
     </div>
    } />
     <Route path='/About' element={<About />} />
     <Route path='/TheEvent' element={<TheEvent />} />
     <Route path='/News' element={<News />} />
     <Route path='/Register' element={<Register />} />
    
    </Routes>
    </BrowserRouter>
    
    </div>
    
    </>
  )
}

export default App
