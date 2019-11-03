import React from 'react';

const LandingPage = () => {
    return(
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
    );
}

export default LandingPage;