import React from "react";
import './About.css';
import donutGuy from '../../images/donut-guy.svg';

const About = () =>{
    return(
        <>
            <div className="me-description">   
                <p className="me-description-text">Hi, I am <span className="name">Vineet</span>, a web developer.<img src={donutGuy} className="profile-pic" /> </p>  
            </div>
            <div className="detail-aboutme">
                <p className="aboutme">
                    Ever since, I got my first computer I have been curious about programming. <strong>Qbasic</strong> was the thing that fascinated me when young, it got me thinking of possibilites of what i could make. Since coming to australia, I have been in a journey as a web developer participating in <strong>internships</strong>, <strong>volunteering</strong> and <strong>freelancing</strong>.
                </p>
            </div>
        </>
    )
}

export default About;