import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './../App.css'
import Home from './Home'

function Layout(){
  return (
    <div className='main-container'>
        <Header/>
        <Home/>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout