import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <div>
    <div className='Header'>
      <div className='HeaderGroup'>
        <a href="http://jiaxuncao.com/VACH/about-us/">ABOUT US</a>
        <a href="http://jiaxuncao.com/VACH/past-exhibitions/">PAST EXHIBITIONS</a>
        <a href="http://jiaxuncao.com/VACH/"><img src={require('../img/Logo.svg')} alt="Logo" width="120" /></a>
        <a href="http://jiaxuncao.com/VACH/upcoming-exhibitions/">UPCOMING EXHIBITIONS</a>
        <a href="http://jiaxuncao.com/VACH/contact/">CONTACT US</a>
      </div>
    </div>
    <div className='About'>
      <div className='AboutUsGroup'>
        <div className='space'></div>
        <div className='space'></div>
        <div className='Contact'>
          <h1>Contact Us</h1>
          <div className='space'></div>
          <div className='ContactText'>
            Hey artist, wanna have your digital works creatively exhibited in the digital spaces? Let’s get in touch...<br></br><br></br>Hey curator, wanna have some first-hand virtual curation experiences? Let’s get in touch...<br></br><br></br>Hey developer and 3D modeler, wanna join our team?<br></br>Let’s get in touch...<br></br><br></br>EMAIL: JC851@DUKE.EDU
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactPage
