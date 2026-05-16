import React from 'react'
import { motion } from 'framer-motion'
import logo from '../images/nav.webp'
import style from '../style/home.module.css'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import black from '../images/cardbg5.jpg'
import card5 from '../images/card5.png'
import card6 from '../images/card6.png'
import chikenHero from '../images/image.png'
import burgger from '../images/burgger.png'
import pizza from '../images/bigpizza.png'
import noodles from '../images/noodles.png'
import pastha from '../images/pastha.png'
import On from './Next'
import Next from './Next'
import Aboutas from './Aboutas'

function Home() {
  const cont = [
    {
      name: "Chicken Leg Piece",
      price: "$100",
      sub: "The Registration Fee",
      img: card1,
    },
    {
      name: "Grill Chicken",
      sub: "The Registration Fee",
      price: "$150",
      img: card2,
    },
    {
      name: "Fried Chicken",
      sub: "The Registration Fee",
      price: "$120",
      img: card3
    },
    {
      name: "Fried Chicken",
      sub: "The Registration Fee",
      price: "$120",
      img: card4
    },
    {
      name: "Cheesy Burger",
      sub: "The Registration Fee",
      price: "$80",
      img: burgger
    },
    {
      name: "Big Pizza",
      sub: "The Registration Fee",
      price: "$200",
      img: pizza
    },
    {
      name: "Spicy Noodles",
      sub: "The Registration Fee",
      price: "$90",
      img: noodles
    },
    {
      name: "Creamy Pasta",
      sub: "The Registration Fee",
      price: "$110",
      img: pastha
    }
  ];
  const card = [
    {
      bgimg: black,
      title: 'ON THIS WEEK',
      dish: 'SPICY FRIED CHICKEN',
      offer: 'limits Time Offer',
      button: "Order Now → ",
      cardimg: card6,
      img: card5
    },
    {
      bgimg: black,
      title: 'ON THIS WEEK',
      dish: 'SPICY FRIED CHICKEN',
      offer: 'limits Time Offer',
      button: "Order Now → ",
      cardimg: card6,
      img: card5
    },
    {
      bgimg: black,
      title: 'ON THIS WEEK',
      dish: 'SPICY FRIED CHICKEN',
      offer: 'limits Time Offer',
      button: "Order Now → ",
      cardimg: card6,
      img: card5
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <div className={style.heroContent} id={style.coro}>
        <div className={style.heroText}>
          <motion.h4 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            id={style.wel}
          >
            WELCOME FRESHHEAT
          </motion.h4> <br />
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            id={style.spi}
          >
            SPICY FRIED CHICKEN
          </motion.h1>
          <motion.button 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.5 }}
            className={style.order}
          >
            <span className={style.text}>ORDER NOW</span>
            <span className={style.arrow}>→</span>
          </motion.button>
        </div>

        <motion.div 
          className={style.heroImgWrap}
          initial={{ x: -800, opacity: 0, rotate: -45 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 70, 
            damping: 15,
            delay: 0.6,
            duration: 1.2 
          }}
        >
          <motion.img 
            src={chikenHero} 
            alt="Chicken Hero" 
            className={style.heroChicken} 
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={style.sub}
      >
        <h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-fork-knife" viewBox="0 0 16 16">
            <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
          </svg>
          <span id={style.best}>Best Food</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-fork-knife" viewBox="0 0 16 16">
            <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
          </svg> </h5>
        <h1>Popular Food Items</h1>
      </motion.div>

      <div className={`container ${style.marqueeWrapper}`}>
        <div id={style.cards}>
          {[...cont, ...cont].map((data, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % cont.length) * 0.1 }}
                className="container"
              >
                <div className={style.card}>
                  <img src={data.img} alt="" id={style.cardimg} />
                  <h5>{data.name}</h5>
                  <p>{data.sub}</p>
                  <h5 className={style.pri}>{data.price}</h5>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>  <br />

      <div className="container" id={style.cards1}>
        {card.map((data, index) => {
          return (
            <motion.div 
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              id={style.coro1}
            >
              <div className={style.cardText}>
                <img src={data.black} alt="" width={'225px'} />
                <h6 className={style.on}>{data.title}</h6>
                <h4 className={style.spi}>{data.dish}</h4>
                <h6 className={style.li}>{data.offer}</h6>
                <button className={style.or}> {data.button} </button>
              </div>
              <div className={style.cardimg}>
                <img src={data.cardimg} alt="" className={style.card5} />
                <img src={data.img} alt="" width={'120px'} className={style.card6} />
              </div>
            </motion.div>
          )
        })}
      </div>
      <Aboutas/> 
    </motion.div>
  )
}

export default Home
