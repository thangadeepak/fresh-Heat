import React from "react";
import style from '../style/Brand.module.css'

const logos = [
  "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  "https://cdn-icons-png.flaticon.com/512/5787/5787016.png",
  "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
  "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
];

function Brand() {
  return (
    <div className="container ">
      <div className={style.logowrapper}>
        <div className={style.logotrack}>
          {logos.concat(logos).map((logo, index) => (
            <div className={style.logoitem} key={index}>
              <img src={logo} alt="brand logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;
