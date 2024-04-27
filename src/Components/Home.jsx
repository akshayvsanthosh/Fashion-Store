import React from 'react'
import homeShape from '../assets/homeShape.svg'
import homeImg from '../assets/homeImg.webp'

function Home() {
  return (
    <div id='home' className='d-flex justify-content-center align-items-center ' style={{height:'610px'}}>
        {/* main div */}
      <div data-aos="flip-left" data-aos-duration="2000" className='homeDiv d-flex justify-content-center ' style={{height:'519px',width:"75%", borderRadius:'59px' }}>
        {/* division to 2 col */}
        <div className='row'>
            {/* 1st col */}
            <div className="leftCol col-12 col-md-6 p-0" style={{height:'519px',borderTopLeftRadius:'59px', borderBottomLeftRadius:'59px'}}>
                <h1 className='homeHeading'>
                    <span className='homeHeadingSpan1'>LET'S</span>
                    <span className='homeHeadingSpan2'>EXPLORE</span>
                    <span className='homeHeadingSpan3'>UNIQUE</span>
                    <span className='homeHeadingSpan4'>CLOTHES.</span>
                </h1>
                <p className='homePara'>Live for Influential and Innovative fashion!</p>
                <div className="row">
                    <div className="col shapeCol">
                        <img width={'88%'} height={'50%'} src={homeShape} alt="" />
                    </div>
                    <div className="col">
                        <a className='homeBttn' href="">SHOP NOW</a>
                    </div>
                </div>
            </div>
            {/* 2nd col */}
            <div className="rightCol col-0 col-md-6 p-0" style={{borderTopRightRadius:'59px', borderBottomRightRadius:'59px'}}>
                <img className='homeImage' src={homeImg} alt="Image" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
