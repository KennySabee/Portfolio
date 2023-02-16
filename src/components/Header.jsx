import React from 'react'
import profile from './../assets/images/profile.png';
import Icons from './Icons';

function Header() {
  return (
    <header className='item-header' >
      <div className="child-header">
        <a href="#"><img src={profile} alt="profile picture" className="profile" /></a>
        <h1>Kenny Merizalde</h1>
        <span>Full Stack Web Developer</span>
      </div>
      <Icons/>
    </header>
  )
}

export default Header