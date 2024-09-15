// import { useState } from "react";
// import { Link,useLocation  } from 'react-router-dom';
// import Logo from "./images/organicLogo.png";
// import "./Header.css";


// function Header({ itemCount }) {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const location = useLocation();

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <header className="header">
//             <div className="logo">
//                 <img src={Logo} alt="LOGO" className="logoImg" />
//             </div>
//             <nav className={`list ${menuOpen ? "show-menu" : ""}`}>
//                 <Link
//                     to="/"
//                     className={`link ${location.pathname === '/' ? 'active-link' : ''}`}
//                 >
//                     Home
//                 </Link>
//                 <Link
//                     to="/shop"
//                     className={`link ${location.pathname === '/shop' ? 'active-link' : ''}`}
//                 >
//                     Shop
//                 </Link>
//                 <Link
//                     to="/about"
//                     className={`link ${location.pathname === '/about' ? 'active-link' : ''}`}
//                 >
//                     About
//                 </Link>
//                 <Link
//                     to="/blog"
//                     className={`link ${location.pathname === '/blog' ? 'active-link' : ''}`}
//                 >
//                     Blog
//                 </Link>
//                 <Link
//                     to="/contact"
//                     className={`link ${location.pathname === '/contact' ? 'active-link' : ''}`}
//                 >
//                     Contact
//                 </Link>
//             </nav>
//             <div className="rightHeader">
//                 <div className="shopping-bag-main">
//                     <div className="shopping-bag">
//                         🛍️
//                     </div>
//                     {itemCount >= 0 && (
//                         <div className="badge">{itemCount}</div>
//                     )}

//                 </div>
//                 <div className="hamburger" onClick={toggleMenu}>
//                     {menuOpen ? "✖" : "☰"}
//                 </div>
//             </div>

//         </header>
//     );
// }

// export default Header;

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from './images/organicLogo.png';
import './Header.css';

function Header({ itemCount }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="LOGO" className="logoImg" />
      </div>
      <nav className={`list ${menuOpen ? 'show-menu' : ''}`}>
        <Link to="/" className={`link ${location.pathname === '/' ? 'active-link' : ''}`}>
          Home
        </Link>
        <Link to="/shop" className={`link ${location.pathname === '/shop' ? 'active-link' : ''}`}>
          Shop
        </Link>
        <Link to="/about" className={`link ${location.pathname === '/about' ? 'active-link' : ''}`}>
          About
        </Link>
        <Link to="/blog" className={`link ${location.pathname === '/blog' ? 'active-link' : ''}`}>
          Blog
        </Link>
        <Link to="/contact" className={`link ${location.pathname === '/contact' ? 'active-link' : ''}`}>
          Contact
        </Link>
      </nav>
      <div className="rightHeader">
        <div className="shopping-bag-main">
          <div className="shopping-bag">
            🛍️
          </div>
          {itemCount >= 0 && (
            <div className="badge">{itemCount}</div>
          )}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>
      </div>
    </header>
  );
}

export default Header;
