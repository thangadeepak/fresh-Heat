import React from "react";
import style from '../style/Chef.module.css'
import chef1 from '../images/chef1.png'
import chef2 from "../images/chef2.png";
import chef3 from "../images/chef3.png";

import { motion } from "framer-motion";

function Chef() {
  const chefs = [
    {
      img: chef1,
      name: "Ralph Edwards",
      role: "Chef Lead"
    },
    {
      img: chef2,
      name: "Leslie Alexander",
      role: "Chef Assistant"
    },
    {
      img: chef3,
      name: "Ronald Richards",
      role: "Chef Assistant"
    }
  ];

  return (
    <div className={style.chefSection}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={style.tag}
      >
        🍽 OUR CHEFS 🍽
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={style.title}
      >
        Meet Our Expert Chefs
      </motion.h2>

      <motion.div 
        className={style.cardWrap}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {chefs.map((data, index) => (
          <motion.div 
            className={style.card} 
            key={index}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            whileHover={{ y: -10 }}
          >
            <div className={style.imgWrap}>
              <motion.img 
                src={data.img} 
                alt={data.name} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <span className={style.share}>⤴</span>
            </div>

            <h4>{data.name}</h4>
            <p>{data.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Chef;
