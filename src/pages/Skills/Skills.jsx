import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import jsIcon from '../../images/js.svg';
import cssIcon from '../../images/css3.svg';
import htmlIcon from '../../images/html5.svg';
import reactIcon from '../../images/react.svg';
import '../Skills/Skills.css';
import { useInView } from "react-intersection-observer";
const Skills = () =>{
    const [multipleSkills, setMultipleSkills] = useState({
        skill0:true,
        skill1:false,
        skill2:false,
        skill3:false,
        skill4:false
    });
    const [slideSkills, setSlideSkills] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    // const skillRef = useRef(null);  
    // useLayoutEffect(() => {
    //         window.addEventListener('scroll', onScroll)
    //         return () => window.removeEventListener('scroll',onScroll);
    // },[])
    // const onScroll = () => {   
    //     const topPos = skillRef.current.getBoundingClientRect().top;    
    //     const scrollPos = window.scrollY + window.innerHeight;
    //     if (topPos < scrollPos){
    //         console.log("scrolled area reached", scrollPos);
    //         console.log("scrollPos", scrollPos);
    //     }
    //     console.log('scrolled');
    // }
    useEffect(() =>{
        if (inView) {
            setSlideSkills(true);
        }
        else{
            setSlideSkills(false);
        }
    },[inView]);
    return(
        <div id="skills" className="skills">
            <h1>Skills</h1>
            <div className={multipleSkills.skill1 ? 'skills-description fade-in ': 'skills-description hide'}>
                <div className="skills-description-icon"><img className="skills-icon" src={jsIcon} alt="Javascript" /></div>
                <p>From wielding the power of vanilla <strong>JavaScript</strong> to harnessing the capabilities of modern frameworks, my approach centers on elevating user interactions and functionality.</p>
            </div>
            <div className={multipleSkills.skill2 ? 'skills-description fade-in':'skills-description hide'}>
                <div className="skills-description-icon"><img className="skills-icon" src={cssIcon} alt="CSS"  /></div>
                <p>With a focus on creating immersive user experiences, I have mastered the art of combining React with <strong>CSS</strong> to craft visually stunning and responsive interfaces.</p>
            </div>
            <div className={multipleSkills.skill3 ? 'skills-description fade-in':'skills-description hide'}>
                <div className="skills-description-icon"><img className="skills-icon" src={htmlIcon} alt="HTML"  /></div>
                <p>Proficient in <strong>HTML5</strong> and adept at implementing semantic markup, I specialize in creating well-structured and accessible websites. I have successfully applied my HTML expertise in various projects, ensuring responsive designs and optimal user experiences.</p>
            </div>
            <div className={multipleSkills.skill4 ? 'skills-description fade-in':'skills-description hide'}>
                <div className="skills-description-icon"><img className="skills-icon" src={reactIcon} alt="HTML"  /></div>
                <p>
                Over the years, I have honed my proficiency in <strong>React</strong>, creating seamless and interactive experiences for users. From building reusable components to managing state and handling complex UI logic, my expertise in React extends across the entire development stack. 
                </p>
            </div>
            <div className={multipleSkills.skill0 ? 'skills-description fade-in': 'skills-description hide'}>
                <p>Over the years, I have honed some of these skills by learning on my own and bootcamp. Some of these skills are listed below.</p>
            </div>
            
            <ul ref={ref} className={slideSkills ? 'slide-skills':'skills-list'}>
                <div className="skills-icon-div" tabIndex={0} onClick={() => setMultipleSkills({skill0:false, skill1:true, skill2:false, skill3:false })}>
                    <li>
                        <img className="skills-icon" src={jsIcon} alt="Javascript"  />
                    </li>
                    <p>Javascript</p>
                </div>
                <div role='button' tabIndex={1} className="skills-icon-div" onClick={() => setMultipleSkills({skill0:false, skill1:false, skill2:true, skill3:false, skill4:false})}>
                    <li>
                        <img className="skills-icon" src={cssIcon} alt="CSS" />
                    </li>
                    <p>CSS</p>
                </div>
                <div className="skills-icon-div" tabIndex={2} onClick={() => setMultipleSkills({skill0:false, skill1:false, skill2:false, skill3:true, skill4:false})}>
                    <li>
                        <img className="skills-icon" src={htmlIcon} alt="HTML" />
                    </li>
                    <p>HTML</p>
                </div>
                <div className="skills-icon-div" tabIndex={3} onClick={() => setMultipleSkills({skill0:false, skill1:false, skill2:false, skill3:false, skill4:true})}>
                    <li>
                        <img className="skills-icon" src={reactIcon} alt="React" />
                    </li>
                    <p>React</p>
                </div>
            </ul>
        </div>
    )
}

export default Skills;