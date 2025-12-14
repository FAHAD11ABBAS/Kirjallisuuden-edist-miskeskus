import React from 'react';
import './Header.css';

// Header komponentti navigaatiolla
function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
           <img src="/images/kide-logo.svg" alt="KIDE Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <a href="#toiminta" className="nav-link">Toiminta</a>
          <a href="#apurahat" className="nav-link">Apurahat</a>
          <a href="#tietoa" className="nav-link">Tietoa meistä</a>
          <a href="#yhteystiedot" className="nav-button">Ota yhteyttä</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
