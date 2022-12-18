import React from 'react'
import Link from 'gatsby-link'

const PastExhibitionsPage = () => (
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
        <h1>Past<br></br>Exhibitions</h1>
        <div className='space'></div>
        <div className='space'></div>
        <div className='PastExhibitionsPage'>
          <div className='PastExhibitionsPageGroup'>
            <div className='PreviewBox'>
              <div className='PreviewPic'>
              </div>
              <div className='PreviewText'>
                <h1>the<br></br>hitchhiker’s<br></br>guide to the<br></br>dream:<br></br>vr art<br></br>exhibition</h1>
                <p>Start Date: Aug 17, 2022<br></br>Publish Platform: VRChat</p>
                <a href='https://vrchat.com/home/launch?worldId=wrld_1ba6ad71-1695-4a50-86e9-59b17868930b' rel='noopener' target="_blank">
                  <button type="button">Enter the Exhibitions</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='space'></div>
        <div className='space'></div>
        <div className='space'></div>
      </div>
    </div>
  </div>
)

export default PastExhibitionsPage
