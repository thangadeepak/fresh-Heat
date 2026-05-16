import React from 'react';
import { motion } from 'framer-motion';
import style from '../style/contact.module.css';

function ContactUs() {
    return (
        <div className={style.contactContainer}>
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={style.header}
            >
                <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Home / <span style={{ color: '#ff4d4d' }}>Contact Us</span>
                </motion.p>
            </motion.div>

            <div className={style.mainContent}>
                {/* Contact Information Section */}
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className={style.infoSection}
                >
                    <h2>Get in Touch</h2>
                    
                    <div className={style.infoItem}>
                        <div className={style.icon}>📍</div>
                        <div className={style.infoText}>
                            <h4>Our Location</h4>
                            <p>123 FreshHeat Avenue, Spicy District<br/>Food City, FC 45678</p>
                        </div>
                    </div>

                    <div className={style.infoItem}>
                        <div className={style.icon}>📞</div>
                        <div className={style.infoText}>
                            <h4>Call Us</h4>
                            <p>+1 (234) 567-8900<br/>+1 (987) 654-3210</p>
                        </div>
                    </div>

                    <div className={style.infoItem}>
                        <div className={style.icon}>✉️</div>
                        <div className={style.infoText}>
                            <h4>Email Us</h4>
                            <p>hello@freshheat.com<br/>support@freshheat.com</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form Section */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className={style.formSection}
                >
                    <h2>Send Us a Message</h2>
                    <p>Have a question or want to make a special reservation? Fill out the form below and we'll get back to you soon.</p>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={style.formGroup}>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className={style.formGroup}>
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className={style.formGroup}>
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div className={style.formGroup}>
                            <textarea placeholder="Your Message..." required></textarea>
                        </div>
                        <motion.button 
                            type="submit" 
                            className={style.submitBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default ContactUs;
