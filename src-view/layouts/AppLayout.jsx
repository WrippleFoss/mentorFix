import React from 'react';
import Navbar from '../components/Navbar';
import { Button } from 'semantic-ui-react';

import HeroImage from '../assets/hero-image.png';

import '../assets/styles/components/_layout.scss';

const AppLayout = () => {
    return(
        <div className="root">
            <Navbar/>
            <div className="hero">
                <div className="hero-text">
                    <h3>
                        <p>Connect with <strong>Mentors</strong></p> 
                        <p>to kickstart your Career</p>
                    </h3>
                    <div className="mini-text">
                        <p>Every expert was once a beginner. Get</p> 
                        <p>guidance, support & mentorship from</p>
                        <p>skilled mentors & reach greater heights.</p>
                    </div>
                    <Button color='green' className="hero-login-button">Sign up</Button>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="hero-image"/>
                </div>
            </div>
        </div>
    )
}

export default AppLayout;