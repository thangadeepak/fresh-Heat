import React from 'react'
import footer1 from '../images/footer1.jpg'
import footer2 from '../images/footer2.jpg'
import footer3 from '../images/footer3.jpg'
import footer4 from '../images/footer4.jpg'
import footer5 from '../images/footer5.jpg'
import footer6 from '../images/footer6.jpg'
import style from '../style/Footer.module.css'
import footerbg from '../images/bg.jpg'
import logo from '../images/logoWhite.svg'
function Footer() {
    return (
        <div>
            <div className={style.footerimg}>
                <img src={footer1} alt="" width={'150px'}/>
                <img src={footer2} alt="" width={'150px'}/>
                <img src={footer3} alt=""width={'150px'} />
                <img src={footer4} alt="" width={'150px'} id={style.footerimg}/>
                <img src={footer5} alt="" width={'150px'} id={style.footerimg}/>
                <img src={footer6} alt="" width={'150px'} id={style.footerimg}/>
            </div>

            <div className={style.footer}>

                <div className={style.box}>
                    <div className={style.add}>
                        <div className="d-flex" style={{ alignItems: 'center', marginBottom: '10px' }}>
                            <div style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="22" height="22" style={{color: '#ff4d4d'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <h6 style={{ margin: 0 }}>Address</h6>
                        </div>
                        <h5>4648 Rocky Road Philadelphia </h5>
                    </div>
                    <div className={style.add1}>
                        <div className="d-flex" style={{ alignItems: 'center', marginBottom: '10px' }}>
                            <div style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="22" height="22" style={{color: '#ff4d4d'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.909A2.25 2.25 0 0 1 2.25 6.993V6.75m19.5 0v.243m0 0c0 .414-.16.82-.44 1.14" />
                                </svg>
                            </div>
                            <h6 style={{ margin: 0 }}>Send Email</h6>
                        </div>
                        <h5>info@gmail.com</h5>
                    </div>
                    <div className={style.add2}>
                        <div className="d-flex" style={{ alignItems: 'center', marginBottom: '10px' }}>
                            <div style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="22" height="22" style={{color: '#ff4d4d'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.292-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </div>
                            <h6 style={{ margin: 0 }}>Call Emergency </h6>
                        </div>
                        <h5>+88 0123 654 99</h5>
                    </div>
                </div>
                <div className="container" id={style.footerelement}>
                    <div className="" id={style.icons}>
                        <div className={style.element1}>
                            <img src={logo} alt="" />
                            <p>Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis

                            </p>
                            <div className={style.ftly} id={style.ftly}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={style.list}>
                        <h3>Quick Links</h3>
                        <ul>
                            {[ "About Us", "Our Gallery", "Our Blog", "FAQ'S", "Contact Us" ].map((text, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ff4d4d" width="16" height="16" style={{marginRight: '10px'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.list1}>
                        <h3>Our Menu</h3>
                        <ul>
                            {[ "Burger King", "Pizza King", "Fresh Food", "Vegetable", "Desserts" ].map((text, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ff4d4d" width="16" height="16" style={{marginRight: '10px'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.list2}>
                        <h3>Contact Us</h3>
                        <p className={style.span}>monday-Friday:<span style={{ color: 'orange', paddingLeft: '20px', fontSize: '13px', }}>8am - 4pm</span> </p>
                        <p className={style.span} >Saturday-Sunday:<span style={{ color: 'orange', paddingLeft: '20px', fontSize: '13px', }}>8am - 4pm</span> </p>
                        <div className={style.emailcontainer}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className={style.emailinput} />
                            <button className={style.emailbtn}>
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className={style.last}>
                    <p>© All Copyright 2024 by FreshEat</p>
                    <button className={style.btn}>Terms&Conditions</button>
                    <button  className={style.btn1}>
                        Privacy Policy
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Footer