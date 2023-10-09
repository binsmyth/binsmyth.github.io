import React, { useEffect, useState } from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";
import Examples from "../Examples/Examples";
import Tools from "../Tools/Tools";
import Loader from "../../components/Loader/Loader";
import Contact from "../Contact/Contact";

const Home = () =>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        setTimeout(() => setIsLoading(false),4400);
    },[])
    return(
        <>
            {isLoading ? <Loader />:
             <div>
                <About />
                <Skills />
                <Examples />
                <Tools />
                <Contact />
            </div>}
        </>
    )
}

export default Home;