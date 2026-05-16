import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Next from './components/Next'
import Aboutas from './components/Aboutas'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Shop from './components/Shop'
import Pages from './components/Pages'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'

export default function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AboutUS' element={<AboutUs/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
        <Route path='/Pages' element={<Pages/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
          
          </Routes>
          <Footer/>
       </BrowserRouter>
    
    </div>
  )
}


