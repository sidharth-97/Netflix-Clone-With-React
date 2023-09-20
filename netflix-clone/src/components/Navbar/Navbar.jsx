import React from 'react'
import "./Navbar.css"
import { nav_avatar, netflix_logo } from "../../utils/constants"


export const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={netflix_logo} alt="logo" />
      <img className='avatar' src={nav_avatar} alt="avatar" />
    </div>
  )
}
