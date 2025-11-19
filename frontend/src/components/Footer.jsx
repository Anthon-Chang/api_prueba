import React from "react";
import { Link } from 'react-router-dom';
import Button from './Button';
import "../styles/servicios.css";

export default function Footer(){
  return (
    <footer className="site-footer" role="contentinfo">
      {/* Quita la clase "container" y deja solo footer-inner */}
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">Roble</div>
          <small>© {new Date().getFullYear()}</small>
        </div>

        <nav className="footer-nav" aria-label="footer navigation">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contact">Contacto</Link>
        </nav>

        <div className="footer-actions">
          <Link to="/contact">
            <Button variant="secondary">Contactarnos</Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}