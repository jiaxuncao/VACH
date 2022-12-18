import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <p>virtual arts &</p>
        <svg width="397" height="72" viewBox="0 0 397 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.2233 70L0 2H20.1145L50.7486 58.1119H52.2514L82.8855 2H103L65.7767 70H37.2233Z" fill="#D9D9D9" />
          <path d="M93.5599 70.28L93.1625 71.0173H94H114.106H114.405L114.547 70.7545L122.263 56.4382H168.696L176.412 70.7545L176.554 71.0173H176.852H196.959H197.796L197.399 70.28L160.19 1.24656L160.049 0.983789H159.75H131.208H130.91L130.768 1.24656L93.5599 70.28ZM211.177 62.6174L211.179 62.6189C219.388 68.5629 231.179 71.5 246.486 71.5H289.241H289.741V71V58.4485V57.9485H289.241H247.757C237.785 57.9485 230.479 56.1831 225.751 52.7356C221.062 49.2524 218.675 43.6978 218.675 35.9522C218.675 28.2053 221.063 22.6851 225.749 19.2668C230.477 15.8184 237.784 14.0526 247.757 14.0526H288.085H288.585V13.5526V1.19414V0.696452L288.087 0.694142L246.488 0.501043L246.488 0.501043C231.18 0.436447 219.387 3.3735 211.177 9.38368C202.939 15.4146 198.839 24.2984 198.839 35.9522C198.839 47.6693 202.939 56.5859 211.177 62.6174ZM300.283 70.5173V71.0173H300.783H319.272H319.772V70.5173V42.8246H377.011V70.5173V71.0173H377.511H396H396.5V70.5173V1.48379V0.983789H396H377.511H377.011V1.48379V29.273H319.772V1.48379V0.983789H319.272H300.783H300.283V1.48379V70.5173ZM161.455 42.8866H129.503L145.027 14.0526H145.932L161.455 42.8866Z" stroke="#D9D9D9" />
        </svg>
        <p>cultural heritage</p>
        <div className='scroll'>Scroll Down</div>
        <div className='nav'>
          <div className='navbar1'>
            <a href="https://jiaxuncao.github.io/VACH/about-us/">ABOUT US</a>
            <a href="https://jiaxuncao.github.io/VACH/past-exhibitions/">PAST<br></br>EXHIBITIONS</a>
          </div>
          <div className='navbar2'>
            <a href="https://jiaxuncao.github.io/VACH/upcoming-exhibitions/">UPCOMING<br></br>EXHIBITIONS</a>
            <a href="https://jiaxuncao.github.io/VACH/contact/">CONTACT US</a>
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
            <a href='https://vrchat.com/home/launch?worldId=wrld_1ba6ad71-1695-4a50-86e9-59b17868930b' rel='noopener' target="_blank">
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
        <a href='https://jiaxuncao.github.io/VACH/contact/'>
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