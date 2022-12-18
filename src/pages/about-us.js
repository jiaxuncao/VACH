import React from 'react'
import Link from 'gatsby-link'

const AboutUsPage = () => (
  <div>
    <div className='Header'>
      <div className='HeaderGroup'>
        <a href="https://jiaxuncao.github.io/VACH/about-us/">ABOUT US</a>
        <a href="https://jiaxuncao.github.io/VACH/past-exhibitions/">PAST EXHIBITIONS</a>
        <a href="https://jiaxuncao.github.io/VACH/"><img src={require('../img/Logo.svg')} alt="Logo" width="120" /></a>
        <a href="https://jiaxuncao.github.io/VACH/upcoming-exhibitions/">UPCOMING EXHIBITIONS</a>
        <a href="https://jiaxuncao.github.io/VACH/contact/">CONTACT US</a>
      </div>
    </div>
    <div className='About'>
      <div className='AboutUsGroup'>
        <div className='space'></div>
        <div className='space'></div>
        <h1>About Us</h1>
        <div className='Para1'>
          <div className='Para1Img'></div>
          <div className='Para1Text'>
            <em>Virtual Arts & Cultural Heritage (VACH)</em> is an ongoing and experimental research project that focuses on investigating novel and emerging information technologies such as virtual reality (VR) to enhance the demonstration of virtual arts and digital cultural heritage. The essential goal of this project to improve the usability and accessibility of exhibitions and museums through digitization. This project has been funded by Duke Kunshan University Human-computer Interaction (HCI) Lab, the Office of Undergraduate Studies, and the Office of Signature Work, mentored by Prof. Xin Tong from DKU and Prof. Ray LC from City Univeristy of Hong Kong.
          </div>
        </div>
        <div className='space'></div>
        <div className='Para2'>
          <div className='Para2Text'>
            <em>“What does VACH do, like, more specifically?”</em><br></br><em>1. Host participatory user studies</em> such as a tour guide around virtual exhibitions that we curate, open to the public. Check past exhibitions page.<br></br><em>2. Collaborate with digital artists</em> who wish to creatively exhibit their works in digital spaces such as social VR platforms. All artists who wish for new possibilities of their digital exhibits (VR paintings, AI-generated works, etc.) can shoot us an email anytime. Check contact us page.<br></br><em>3. Collaborate with curators, developers, and 3D modelers.</em> Anyone with expertise in virtual/physical curation, game development (Unity3D), or 3D modeling is welcomed to contact us.
          </div>
          <div className='Para2Img'></div>
        </div>
        <div className='space'></div>
        <h1>Members</h1>
        <div className='space'></div>
        <div className='AboutPeople'>
          <div className='Founder'>
            <h1>Founder & Leading Researcher</h1>
            <div className='ProfilePic'></div>
            <h2>Jiaxun (Jessie) Cao<br></br>Duke Kunshan University</h2>
          </div>
          <div className='button'>
            <a href='https://jiaxuncao.github.io/VACH/contact/'>
              <button type="button">Join us now</button>
            </a>
          </div>
        </div>
        <div className='space'></div>
        <div className='space'></div>
      </div>
    </div>
  </div>
)

export default AboutUsPage
