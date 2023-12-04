import React, { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import mainIcon from '../../images/vineet logo.svg';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";
import debounce from 'lodash.debounce';

const Header = () =>{
    const [isScrolled,setIsScrolled] = useState(false);
    const changeNav = (e)=>{
        if(window.scrollY > window.innerHeight * 0.000000001){
            if(!isScrolled) setIsScrolled(true);
        }
        else{
            if(isScrolled) setIsScrolled(false);
        }
    }
    const debouncedScroll = debounce(changeNav, 20)
    useEffect(()=>{
        console.log(window.scrollY);
        let header = document.getElementById("header-div");
        document.addEventListener("scroll",debouncedScroll)
        return () =>{
            document.removeEventListener("scroll",debouncedScroll);
        }
    });
    return(
        <>
            <div className="sticky-header">
                <div className="hamburger-menu">
                    <button><GiHamburgerMenu />
                    </button>
                </div>
                <div id="header-div" className={isScrolled ? 'header-div active':'header-div'}>
                    <img src={mainIcon} width={200} className="my-icon"/>
                    <a className="header-links" href="/"> <div>Home</div></a>
                    <a className="header-links" href="/skills"><div>Skills</div></a>
                    <a className="header-links" href="/examples"><div>Work Examples</div></a>
                    <a className="header-links" href="/contact"><div>Contact</div></a>
                    <div className="social-links">
                        <a href='https://github.com/binsmyth'><BsGithub size={40} className={isScrolled ? 'social-icon big':'social-icon'}/></a>
                        <a href='https://www.linkedin.com/in/vineet-man-singh-4b274b71/'><BsLinkedin size={40} className={isScrolled ? 'social-icon big':'social-icon'}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;