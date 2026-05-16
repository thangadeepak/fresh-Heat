import React from 'react'
import style from '../style/AboutUs.module.css'
import chef1 from '../images/chef1.png'
import chef2 from '../images/chef2.png'
import chef3 from '../images/chef3.png'

function AboutCard() {
    const chefs = [
        {
            id: 1,
            name: "Devon Lane",
            role: "President of Sales",
            image: chef1,
        },
        {
            id: 2,
            name: "Ralph Edwards",
            role: "Chef Manager",
            image: chef2,
            active: true,
        },
        {
            id: 3,
            name: "Marvin McKinney",
            role: "Main Chef",
            image: chef3,
        },
    ];

    return (
        <div>
            <div className={style.our}>
                <h6>Our Chef</h6>
                <h4>Meet Our Expert Chefe</h4>
            </div>
            <div className={style.chefsection}>
                <div className={style.chefcontainer}>
                    {chefs.map((chef) => (
                        <div className={style.chefcard} key={chef.id}>
                            <img src={chef.image} alt={chef.name} />

                      <div className={`chef-info ${chef.active ? "highlight" : ""}`} id={style.chefinfo}>
                                <h3>{chef.name}</h3>
                                <p>{chef.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutCard