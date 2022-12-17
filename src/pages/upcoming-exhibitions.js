import React from 'react'
import Link from 'gatsby-link'

const UpcomingExhibitionsPage = () => (
  <div>
    <div className='Header'>
      <div className='HeaderGroup'>
        <a href="/about-us/">ABOUT US</a>
        <a href="/past-exhibitions/">PAST EXHIBITIONS</a>
        <a href="/home/"><img src={require('../img/Logo.svg')} alt="Logo" width="120" /></a>
        <a href="/upcoming-exhibitions/">UPCOMING EXHIBITIONS</a>
        <a href="/contact/">CONTACT US</a>
      </div>
    </div>
    <div className='About'>
      <div className='AboutUsGroup'>
        <div className='space'></div>
        <div className='space'></div>
        <h1>Upcoming<br></br>Exhibitions</h1>
        <div className='space'></div>
        <div className='space'></div>
        <div className='UpcomingExhibitionsPage'>
          <div className='UpcomingExhibitionsPageGroup'>
            <div className='PreviewBox'>
              <div className='PreviewPic2'>
              </div>
              <div className='PreviewText'>
                <h1>the<br></br>hitchhiker’s<br></br>guide to the<br></br>dream:<br></br>vr art<br></br>exhibition</h1>
                <p>Start Date: To Be Updated<br></br>Publish Platform: VRChat</p>
                <a href=''>
                  <button type="button">Subscribe for Updates</button>
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

export default UpcomingExhibitionsPage
