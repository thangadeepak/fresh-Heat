import React, { useRef, useEffect } from "react";
import style from '../style/Card.module.css'
import cardimg from '../images/cardimg.jpg'

const Card = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const { current } = scrollRef;
      if (current) {
        const isMobile = window.innerWidth <= 768;
        const scrollAmount = isMobile ? 275 : 350; // card width + gap
        
        // If we reached the end of the scroll (with 10px buffer), loop back to the start
        if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 15) {
          current.scrollLeft = 0;
        } else {
          current.scrollLeft += scrollAmount;
        }
      }
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const isMobile = window.innerWidth <= 768;
    const scrollAmount = isMobile ? 275 : 350;

    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const data = [
    {
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      date: "25",
      title: "Quick Cravings Unraveling Fast Food Delights",
      category: "Noodles"
    },
    {
      img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
      date: "15",
      title: "Fast Food Frenzy A Taste Of Convenience",
      category: "Noodles"
    },
    {
      img: cardimg,
      date: "17",
      title: "Benefits Of Health And Safety Measures",
      category: "Chicken"
    },
    {
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      date: "20",
      title: "Delicious Healthy Meals Everyday",
      category: "Food"
    }
  ];

  return (
    <div className={style.carouselwrapper}>
      
      <button className={style.arrowleft} onClick={() => scroll("left")}>
        ←
      </button>

      <div className={style.carouselcontainer} ref={scrollRef}>
        {data.map((item, index) => (
          <div className={style.card} key={index}>
            <img src={item.img} alt="food" />

            <div className={style.cardbody}>
              <div className={style.flex}>
                <div className={style.datebox}>
                <h4>{item.date}</h4>
                <span>Dec</span>
              </div>

              <div className={style.meta}>
                <span>By Admin</span>
                <span>{item.category}</span>
              </div>
              </div>

              <h3>{item.title}</h3>

              <p className={style.readmore}>
                Read More →
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className={style.arrowright} onClick={() => scroll("right")}>
        →
      </button>
    </div>
  );
};

export default Card;
