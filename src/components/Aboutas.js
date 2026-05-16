import React from 'react'
import { motion } from 'framer-motion'
import style from '../style/Aboutas.module.css'
import rice from '../images/card2.png'
import pastha from '../images/pastha.png'
import pizza from '../images/card3.png'
import noodles from '../images/noodles.png'
import fry from '../images/card1.png'
import bigpizza from '../images/bigpizza.png'
import Menu from './Menu'

function Aboutas() {
    const food = [
        { id: 1, name: "Chicken Fried Rice", sub: "The Registration Fee", price: "$100.99", img: rice },
        { id: 2, name: "Chinese Pasta", sub: "The Registration Fee", price: "$15.99", img: pastha },
        { id: 3, name: "Chicken Pizza", sub: "The Registration Fee", price: "$100.99", img: pizza },
        { id: 4, name: "Chicken Noodles", sub: "The Registration Fee", price: "$200.99", img: noodles },
        { id: 5, name: "Chinese 65", sub: "Special Offer", price: "$15.99", img: fry }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={style.bg}
                >
                    <h4 id={style.papular}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fork-knife" viewBox="0 0 16 16">
                            <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
                        </svg> About Us 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fork-knife" viewBox="0 0 16 16">
                            <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
                        </svg>
                    </h4>
                    <h1 id={style.best}>Variety of flavours from <br /> american cuisine</h1>
                    <p id={style.it}>It is a long established fact that a reader will be distracted the readable content  <br /> of a page when looking at layout the point established fact that</p>
                    <button className={style.order}>
                        <span className=''>ORDER NOW</span>
                        <span className={style.arrow}>→</span>
                    </button>
                </motion.div>
            </div>

            <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className=""
            >
                <h5 id={style.dish}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fork-knife" viewBox="0 0 16 16">
                        <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
                    </svg> POPULAR DISHES 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fork-knife" viewBox="0 0 16 16">
                        <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
                    </svg>
                </h5>
                <h1 id={style.sel}>Best Selling Dishes</h1>
            </motion.div>

            <div className={style.cards}>
                {food.map((data, index) => (
                    <motion.div 
                        key={data.id}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className={style.food}
                    >
                        <div className={style.img}>
                            <img src={data.img} alt={data.name} />
                        </div>
                        <h3>{data.name}</h3>
                        <p>{data.sub}</p>
                        <h4>{data.price}</h4>
                    </motion.div>
                ))}
            </div>

            <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className={style.order1}
            >
                <span className=''>VIEW ALL ITEM</span>
                <span className={style.arrow1}>→</span>
            </motion.button>
           
            <div className={style.main}>
                <div className="container" id={style.main2}>
                    <motion.div 
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
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
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={style.pizza}
                    >
                        <img src={bigpizza} alt="" className='img-fluid' id={style.pizza} />
                    </motion.div>
                </div>
            </div>
            <Menu/>
        </motion.div>
    )
}

export default Aboutas