import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video2 from '../videos/video-2.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src={require('/assets/videos/video-2.mp4')} /> */}
            <video src={video2} autoPlay loop muted />
            {/* <img src={img1} alt="Now hear this" /> */}
        
            <h1>ADVEN+URE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'> GET STARTED </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'> 
                WATCH THIS TRAILER <i className='far fa-play-circle' />

                 </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
