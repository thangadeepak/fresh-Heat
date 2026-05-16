import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import style from '../style/Pages.module.css';
import Chef from './Chef';

// Images for Gallery
import footer1 from '../images/footer1.jpg';
import footer2 from '../images/footer2.jpg';
import footer3 from '../images/footer3.jpg';
import footer4 from '../images/footer4.jpg';
import footer5 from '../images/footer5.jpg';
import footer6 from '../images/footer6.jpg';

const pageLinks = [
    { title: "Our Story", desc: "Learn about our journey and values.", icon: "📖", link: "/AboutUs" },
    { title: "Our Menu", desc: "Explore our wide range of delicious items.", icon: "🍔", link: "/Shop" },
    { title: "Expert Chefs", desc: "Meet the masters behind our kitchen.", icon: "👨‍🍳", link: "#chefs" },
    { title: "Our Services", desc: "We provide catering and more.", icon: "🛠", link: "#" },
    { title: "Contact Us", desc: "Get in touch for bookings and queries.", icon: "📞", link: "#" },
    { title: "FAQ", desc: "Find answers to common questions.", icon: "❓", link: "#" },
];

function Pages() {
    return (
        <div className={style.pagesContainer}>
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={style.header}
            >
                <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    Pages Directory
                </motion.h1>
                <p>Home / <span style={{ color: '#ff4d4d' }}>Pages</span></p>
            </motion.div>

            {/* Links Grid */}
            <section className={style.section}>
                <div className={style.titleGroup}>
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={style.subtitle}
                    >
                        Explore
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={style.title}
                    >
                        Our Internal Pages
                    </motion.h2>
                </div>
                <motion.div 
                    className={style.linksGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    {pageLinks.map((p, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { y: 30, opacity: 0, scale: 0.9 },
                                visible: { y: 0, opacity: 1, scale: 1 }
                            }}
                            whileHover={{ 
                                scale: 1.03, 
                                y: -10,
                                transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                        >
                            <Link to={p.link} className={style.pageLinkCard}>
                                <motion.span 
                                    className={style.icon}
                                    animate={{ 
                                        y: [0, -5, 0],
                                    }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                >
                                    {p.icon}
                                </motion.span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Chefs Section (Imported Component) */}
            <section id="chefs" className={style.section}>
                <Chef />
            </section>

            {/* Gallery Section */}
            <section className={style.section}>
                <div className={style.titleGroup}>
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={style.subtitle}
                    >
                        Gallery
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={style.title}
                    >
                        Glimpses of FreshHeat
                    </motion.h2>
                </div>
                <motion.div 
                    className={style.gallery}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {[footer1, footer2, footer3, footer4, footer5, footer6].map((img, index) => (
                        <motion.div
                            key={index}
                            className={style.galleryImgWrapper}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                                visible: { opacity: 1, scale: 1, rotate: 0 }
                            }}
                            whileHover={{ 
                                scale: 1.05, 
                                zIndex: 10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <img 
                                src={img} 
                                alt="Gallery" 
                                className={style.galleryImg}
                            />
                            <motion.div 
                                className={style.overlay}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <span>View Detail</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}

export default Pages;
