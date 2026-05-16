import React, { useState } from "react";
import style from '../style/AboutUs.module.css'

function Carosal() {
    const testimonials = [
  {
    id: 1,
    text: "Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC.",
    name: "Richard",
    role: "UI Designer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    text: "Lorem Ipsum Has Been The Industry Standard Dummy Text Ever Since The 1500s.",
    name: "John Doe",
    role: "Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    text: "It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting.",
    name: "Arun",
    role: "Manager",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];
const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  return (
    <div>
           <section className={style.testimonial}>
      <p className={style.tag}>🍔 TESTIMONIALS 🍔</p>
      <h2>What Have Lots Of Happy Customer Feedback</h2>

      <div className={style.divider}></div>

      <div className={style.content}>
        <span className={style.quote}>❝</span>
        <p className={style.text}>{testimonials[index].text}</p>
      </div>

      <div className={style.users}>
        {testimonials.map((item, i) => (
          <img
            key={item.id}
            src={item.img}
            alt=""
            className={i === index ? "" : ""} id={style.active}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div className={style.arrows}>
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>
    </section>
    </div>
  )
}
}
export default Carosal;