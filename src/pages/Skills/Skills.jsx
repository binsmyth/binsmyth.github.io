import React from "react";
import jsIcon from '../../images/js.svg';
import cssIcon from '../../images/css3.svg';
import htmlIcon from '../../images/html5.svg';
import reactIcon from '../../images/react.svg';
import '../Skills/Skills.css';
const Skills = () =>{
    return(
        <div className="skills">
            <h1>Skills</h1>
            <ul>
                <li><img className="skills-icon" src={jsIcon} alt="Javascript" /></li>
                <li><img className="skills-icon" src={cssIcon} alt="CSS" /></li>
                <li><img className="skills-icon" src={htmlIcon} alt="HTML" /></li>
                <li><img className="skills-icon" src={reactIcon} alt="React" /></li>
            </ul>
        </div>
    )
}

export default Skills;