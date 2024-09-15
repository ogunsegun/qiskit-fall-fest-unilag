import React, { useState } from 'react';
import styles from './App.module.css';



function Navbar() {
  const [isdropDown, setDropDown] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggledropdown = () => {
    setDropDown(!isdropDown);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <h4>Qiskit Fall 2024 Unilag QCC</h4>
        <div onClick={toggleMenu}>
        </div>
        <ul >
          <li>
            <a href='/'>Home</a>
          </li>

          <li className={styles.dropdown}>
            <button onClick={toggledropdown}>The Event</button>
            {isdropDown && (
              <ul className={styles.dropdownmenu}>
                <li>
                  <a href='/TheEvent'>EXTENSION EVENT</a>
                </li>
              </ul>
            )}
          </li>
          
          <li>
            <a href='/News'>News</a>
          </li>
          <li>
            <a href='/Register'>Register</a>
          </li>
          <li>
            <a href='/About'>About</a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Navbar;





// import React, { useState } from 'react'
// import styles from './App.module.css';
// // import  {Link, BrowserRouter, Routes, Route} from "react-router-dom"

// function Navbar() {
//     const [isdropDown, setDropDown] = useState(false);

//     const toggledropdown = () => {
//         setDropDown(!isdropDown);
//     }

//   return (
//     <div>
//       <nav className={styles.nav}>
//       <h4>Qiskit Fall 2024 Unilag QCC</h4>
//       <ul>
//             <li>
//                 <a href='#'>Home</a>
//             </li>
//             <li>
//                 <a href='#'>About</a>
//             </li>
//             <li className='dropdown'>
//                 <button onClick={toggledropdown}>The Event</button>
//                 {isdropDown && (
//                     <ul className={styles.dropdownmenu}>
//                         <li>
//                             <a href='#'>event1</a>
//                         </li>
//                         <li>
//                             <a href='#'>event2</a>
//                         </li>
//                         <li>
//                             <a href='#'>event3</a>
//                         </li>
//                         <li>
//                             <a href='#'>event1</a>
//                         </li>
//                         <li>
//                             <a href='#'>event2</a>
//                         </li>
//                         <li>
//                             <a href='#'>event3</a>
//                         </li>
//                     </ul>
//                 )}
//             </li>
//             <li>
//                 <a href='#'>News</a>
//             </li>
//             <li>
//                 <a href='#'>Register</a>
//             </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar
