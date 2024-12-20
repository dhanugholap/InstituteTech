import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.jpeg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT  TECHNOSIGNIA</h3>
                <h2>Software Testing</h2>
                <p>
                    Supercharge your software testing career with our job-oriented course.
                    Master manual, automated, and API testing using industry- standard tools for
                    high-demand job opportunities
                </p>
            </div>
        </div>
    )
}

export default About
