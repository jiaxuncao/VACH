import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className='Header'>
    <div className='HeaderGroup'>
      <a href="/about-us/">ABOUT US</a>
      <a href="#">PAST EXHIBITIONS</a>
      <a href="/index/"><img src={require('../img/Logo.svg')} alt="Logo" width="120" /></a>
      <a href="#">UPCOMING EXHIBITIONS</a>
      <a href="#">CONTACT US</a>
    </div>
  </div>
)

export default Header
