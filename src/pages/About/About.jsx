import React from "react";
import './About.css';
import donutGuy from '../../images/donut-guy.svg';
const About = () =>{
    return(
        <>
            <div className="me-description">   
                <p className="me-description-text">Hi, I am Vineet, a web developer.<img src={donutGuy} className="profile-pic" /> </p>  
            </div>
            
        </>
    )
}

export default About;