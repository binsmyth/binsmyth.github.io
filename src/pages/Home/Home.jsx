import React, { useEffect, useState } from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";
import Examples from "../Examples/Examples";
import Tools from "../Tools/Tools";
import Loader from "../../components/Loader/Loader";
import Contact from "../Contact/Contact";
import Header from "../../components/Header/Header";

import './Home.css';

const Home = () =>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        setTimeout(() => setIsLoading(false),4400);
    },[])
    
    return(
        <>
            {isLoading && <Loader />}
             <div id="home" className="home-div">
                <Header />
                <About />
                <Skills />
                <Examples />
                <Contact />
            </div>
        </>
    )
}

export default Home;