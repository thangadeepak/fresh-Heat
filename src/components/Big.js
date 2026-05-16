import React from "react";
import style  from '../style/Big.module.css'
import chef from "../images/chef2.png"; 

function Big() {
  return (
    <section className={style.testimonial}>
      <div className={style.container}>
        
      
        <div className={style.testimonialleft}>
          <img src={chef} alt="chef" />
        </div>

     
        <div className={style.testimonialright}>
          <p className={style.subtitle}>TESTIMONIALS</p>
          <h2>What Our Clients Say</h2>

          <div className={style.testimonialcard}>
            <div className={style.cardheader}>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="client"
                className={style.clientimg}
              />
              <div>
                <h5>Albert Flores</h5>
                <span>Web Designer</span>
                <div className={style.stars}>★★★★★</div>
              </div>
              <div className={style.quote}>❝</div>
            </div>

            <p className={style.cardtext}>
              Penatibus magnis dis point parturient montes nascetur ridiculus
              mus. Ut id lorem ac enim the vestibulum blandit nec sit amet
              felis. Fusce quis diam odio Cras mattis mi quis tincidunt.
            </p>
          </div>

          <div className={style.arrowbuttons}>
            <button className={style.prev}>←</button>
            <button className={style.next}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Big;
