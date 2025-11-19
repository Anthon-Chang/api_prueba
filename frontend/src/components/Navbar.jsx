import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/servicios.css";

export default function Navbar(){
  const [theme, setTheme] = useState(() => {
    try{
      return localStorage.getItem('site-theme') || 'light';
    }catch(e){ return 'light' }
  });

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    try{ localStorage.setItem('site-theme', theme); }catch(e){}
  },[theme]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">Roble</div>
        <nav className="nav" aria-label="main navigation">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/servicios" className="nav-link">Servicios</Link>
          <Link to="/about" className="nav-link">Sobre nosotros</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </nav>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button
            className="menu-btn"
            aria-label="toggle-theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
          >{theme === 'dark' ? '☀️' : '🌙'}</button>
          <button className="menu-btn" aria-label="menu">☰</button>
        </div>
      </div>
    </header>
  );
}