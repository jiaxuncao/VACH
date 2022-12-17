import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <p>virtual arts &</p>
        <h1>VACH</h1>
        <p>cultural heritage</p>
        <div className='scroll'>Scroll Down</div>
        <div className='nav'>
          <div className='navbar1'>
            <a href="http://jiaxuncao.com/VACH/about-us/">ABOUT US</a>
            <a href="http://jiaxuncao.com/VACH/past-exhibitions/">PAST<br></br>EXHIBITIONS</a>
          </div>
          <div className='navbar2'>
            <a href="http://jiaxuncao.com/VACH/upcoming-exhibitions/">UPCOMING<br></br>EXHIBITIONS</a>
            <a href="http://jiaxuncao.com/VACH/contact/">CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
    <div className='AboutUs'>
      <div className='AboutUsGroup'>
        <div className='space'></div>
        <div className='Logo'>
        </div>
        <div className='textChunk'>
          <h1>About Us</h1>
          <p><em>Virtual Arts & Cultural Heritage (VACH) </em>is an ongoing and experimental research project that focuses on investigating novel and emerging information technologies such as virtual reality (VR) to enhance the demonstration of virtual arts and digital cultural heritage. The essential goal of this project to improve the usability and accessibility of exhibitions and museums through digitization. This project has been funded by Duke Kunshan University Human-computer Interaction (HCI) Lab, the Office of Undergraduate Studies, and the Office of Signature Work, mentored by Prof. Xin Tong from DKU and Prof. Ray LC from City Univeristy of Hong Kong.</p>
        </div>
      </div>
    </div>
    <div className='PastExhibitions'>
      <div className='PastExhibitionsGroup'>
        <h1>Past Exhibitions..</h1>
        <div className='PreviewBox'>
          <div className='PreviewPic'>
          </div>
          <div className='PreviewText'>
            <h1>the<br></br>hitchhiker’s<br></br>guide to the<br></br>dream:<br></br>vr art exhibition</h1>
            <p>Start Date: Aug 17, 2022<br></br>Publish Platform: VRChat</p>
            <a href='https://vrchat.com/home/launch?worldId=wrld_1ba6ad71-1695-4a50-86e9-59b17868930b' target="_blank">
              <button type="button">Enter the Exhibitions</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className='space'></div>
    <div className='PhotoWall'>
      <div className='PhotoWallGroup'>
      </div>
    </div>
    <div className='Contact'>
      <div className='ContactGroup'>
        <h1>Wanna have your digital works creatively exhibited<br></br>in the digital spaces? Let’s get in touch...</h1>
        <a href='http://jiaxuncao.com/VACH/contact/'>
          <button type="button">Contact Us</button>
        </a>
      </div>
    </div>
    <div className='People'>
      <div className='PeopleGroup'>
        <div className='Founder'>
          <h1>Founder & Leading Researcher</h1>
          <div className='ProfilePic'></div>
          <h2>Jiaxun (Jessie) Cao<br></br>Duke Kunshan University</h2>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage