import React from 'react'
import { motion } from 'framer-motion'
import style from '../style/AboutUs.module.css'
import Aboutcardbg from '../images/Aboutcardbg.jpg'
import card6 from '../images/card6.png'
import papz from '../images/papz.png'
import left from '../images/left.png'
import right from '../images/right.png'
import bigpizza from '../images/bigpizza.png'
import AboutCard from './AboutCard'
import DownloadBanner from './DowloadeBanner'
import Carosal from './Carosal'

function AboutUs() {
    const Card = [
        {
            bg: Aboutcardbg,
            price: 'START PRICE & 001',
            special: 'TODAY SPACIAL FOOD',
            time: 'limits Time Offer',
            btn: 'Order Now →',
            img: card6,
            img1: papz
        },
        {
            bg: Aboutcardbg,
            price: 'START PRICE & 001',
            special: 'TODAY SPACIAL FOOD',
            time: 'limits Time Offer',
            btn: 'Order Now →',
            img: card6,
            img1: papz
        },
        {
            bg: Aboutcardbg,
            price: 'START PRICE & 001',
            special: 'TODAY SPACIAL FOOD',
            time: 'limits Time Offer',
            btn: 'Order Now →',
            img: card6,
            img1: papz
        }
    ]
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
        >
            <div className={style.bg}>
                <motion.h1 
                    initial={{ y: -20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.2 }}
                >
                    ABOUT US 01
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.4 }}
                >
                    Home  / <span style={{ color: 'red' }}>AboutUS 01</span>
                </motion.p>
            </div>

            <div className='container-fluid' id={style.flex}>
                {Card.map((data, index) => {
                    return (
                        <motion.div 
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='' 
                            id={style.card}
                        >
                            <div className="">
                                <h6 id={style.price}>{data.price}</h6>
                                <h5 id={style.special}>{data.special}</h5>
                                <p id={style.time}>{data.time}</p>
                                <button id={style.btn}>{data.btn}</button>
                            </div>
                            <div className=''>
                                <img src={data.img} alt="" className={style.img} /> <br />
                                <img src={data.img1} alt="" id={style.img1} />
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            <div className="container-fluid" id={style.dflex}>
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={style.title}
                >
                    <h5> About Us</h5>
                    <h2>Variety of flavours from <br /> american cuisine</h2>
                    <p>
                        It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that
                    </p>
                    <button className={style.order}>Order Now <span className={style.arrow}> →</span>  </button>
                </motion.div>
            </div>
            <div className={style.scrollWrap}>
                <h1 className={style.scrollText}>
                    FRIED CHICKEN &nbsp; BURGER &nbsp; CHICKEN PIZZA &nbsp; FRESH FOOD
                </h1>
            </div>
            <div className={style.main}>
                <div className="container" id={style.main2}>
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={style.content}
                    >
                        <h5>WELCOME FRESHEAT</h5>
                        <h1>TODAY SPACIAL FOOD</h1>
                        <h5>limits Time Offer</h5>
                        <button className={style.order2}>
                            <span className=''>ORDER NOW</span>
                            <span className={style.arrow2}>→</span>
                        </button>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={bigpizza} alt="" className='img-fluid' id={style.pizza} />
                    </motion.div>
                </div>
            </div>
            <AboutCard/>
            <DownloadBanner/>
            <Carosal/>
        </motion.div>
    )
}

export default AboutUs