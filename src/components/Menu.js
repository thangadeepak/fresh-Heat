import React from 'react'
import style from '../style/Menu.module.css'
import cola from '../images/cola.png'
import drink from '../images/drink.png'
import chinish from '../images/chinish.png'
import fresh from '../images/fresh.png'
import menuitem1 from '../images/menuitem1.png'
import Offer from './Offer'
import Chef from './Chef'
import Brand from './Brand'
import Big from './Big'
import Card from './Card'

function Menu() {
    const menuitem = [
        {
            img: menuitem1,
            dish: 'Chinese Pasta',
            p: 'Its a testament to our',
            dollor: '$15.89'
        },
        {
            img: menuitem1,
            dish: 'Chinese Pasta',
            p: 'Its a testament to our',
            dollor: '$15.89'
        },
        {
            img: menuitem1,
            dish: 'Chinese Pasta',
            p: 'Its a testament to our',
            dollor: '$15.89'
        },
        {
            img: menuitem1,
            dish: 'Chinese Pasta',
            p: 'Its a testament to our',
            dollor: '$15.89'
        },
        {
            img: menuitem1,
            dish: 'Chinese Pasta',
            p: 'Its a testament to our',
            dollor: '$15.89'
        },
        {
            img: menuitem1,
            dish: 'Chinese Pasta',
            p: 'Its a testament to our',
            dollor: '$15.89'
        },

    ]
    return (
        <div>
            <div className="container" id={style.white}>
                <div className={style.menu}>
                    <h5> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fork-knife" viewBox="0 0 16 16">
                        <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
                    </svg>   Food Menu   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fork-knife" viewBox="0 0 16 16">
                            <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
                        </svg></h5>
                    <h2>Fresheat Foods Menu</h2>
                    <div className="" id={style.topmenu}>
                        <img src={cola} alt="" className={style.cola}/>
                        <h6 className={style.fast}>Fast Food</h6>
                        <img src={drink} alt="" className={style.drink} />
                        <h6 id={style.drink}>Drink & Juice</h6>
                        <img src={chinish} alt="" className={style.pizza} />
                        <h6 id={style.pizza} >Pizza</h6>
                        <img src={fresh} alt="" className={style.fresh} />
                        <h6 id={style.fresh}>Fresh Pasta</h6>

                    </div>
                    <hr />

                    <div className={style.menulist}>
                        <div className={style.map1}>

                            {menuitem.map((data) => {
                                return <div className={style.menuitem}>
                                    <img src={data.img} className={style.img} />
                                    <div className={style.menuitem1}>
                                        <h6 >{data.dish}</h6>
                                        <p>{data.p}</p>
                                    </div>
                                    <div className={style.menuitem2}>
                                        <h6 id={style.font}>{data.dollor}</h6>
                                    </div>


                                </div>
                            })}
                        </div> 
                         <div className={style.map}>

                            {menuitem.map((data) => {
                                return <div className={style.menuitem}>
                                    <img src={data.img} />
                                    <div className={style.menuitem1}>
                                        <h6>{data.dish}</h6>
                                        <p>{data.p}</p>
                                    </div>
                                    <div className={style.menuitem2}>
                                        <h6>{data.dollor}</h6>
                                    </div>


                                </div>
                            })}
                        </div>

                    </div>

                </div>
               

            </div>
 <div className={style.scrollWrap}>
                    <h1 className={style.scrollText}>
                        FRIED CHICKEN &nbsp; BURGER &nbsp; CHICKEN PIZZA &nbsp; FRESH FOOD
                    </h1>
                </div>
                <Offer/>
                <Chef/>
                <Brand/>
                <Big/>
                <Card/>
        </div>
    )
}

export default Menu