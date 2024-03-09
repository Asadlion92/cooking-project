import React from 'react'
import './HomeBanner.css'
import homeBannerImg from '../../images/home-banner.png'

function HomeBanner() {
  return (
    <div className='homebanner-container'>
        <div className='homebanner-discription'>
            <h1>Discover Your Perfect Online Cooking Course</h1>
            <p>All our online courses are designed to give you an exceptional learning experience, with hands-on video sessions and personal mentorship from experts around the globe.</p>
        </div>
        <img src={homeBannerImg} alt="home-banner-img" className='homebanner-img' />
    </div>
  )
}

export default HomeBanner