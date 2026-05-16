import React from "react";
import style from '../style/Offer.module.css'
import burger from '../images/burgger.png'

function Offer() {
  return (
    <div className={style.offerSection}>
      
    
      <div className={style.imageWrap}>
        <img
          src={burger}  
          alt="burger"
        />
      </div>

    
      <div className={style.offerCard}>
        <span className={style.tag}> SPECIAL OFFER </span>

        <h2>Get 30% Discount Every Item</h2>

        <p className={style.expired}>EXPIRED</p>

        <button className={style.orderBtn}>
          ORDER NOW <span>→</span>
        </button>
      </div>

    </div>
  );
}

export default Offer;
