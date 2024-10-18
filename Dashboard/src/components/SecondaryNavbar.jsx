import React from 'react'
import Logo from '../assets/profile.png'
const SecondaryNavbar = () => {
  return (
    <nav class="secondary-nav">
        <h1 id="logo">My <span>Dash.</span></h1>
        <img src={Logo} alt="" />
    </nav>
  )
}

export default SecondaryNavbar
