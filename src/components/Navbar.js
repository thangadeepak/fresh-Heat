import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import style from '../style/logo.module.css';

function Navbar() {
  return (
    <motion.div 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
      className={style.navContainer}
    >
      {/* LOGO */}
      <div className={style.logowrap}>
        <Link to="/">
          <img src={logo} alt="Logo" className={style.logo} />
        </Link>
      </div>

      {/* CENTER MENU - Visible only on Laptop (1024px+) */}
      <div className={style.desktopMenu}>
        <ul className={style.navLinks}>
          <motion.li whileHover={{ scale: 1.1, color: '#ff4d4d' }}><Link to="/">Home +</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: '#ff4d4d' }}><Link to="/AboutUs">About Us +</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: '#ff4d4d' }}><Link to="/Shop">Shop +</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: '#ff4d4d' }}><Link to="/Pages">Pages +</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: '#ff4d4d' }}><Link to="/Blog">Blog +</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: '#ff4d4d' }}><Link to="/ContactUs">Contact Us +</Link></motion.li>
        </ul>
      </div>

      {/* RIGHT ICONS & TOGGLER */}
      <div className={style.rightGroup}>
        <div className={style.iconBox}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <div className={style.iconBox}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
        </div>

        {/* Hamburger - Visible on Mobile & Tablet (Under 1024px) */}
        <button className={style.menuToggle} type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu">
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>
      </div>
    </motion.div>
  );
}

export default Navbar;
