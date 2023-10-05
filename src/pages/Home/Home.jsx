import React, { useEffect, useState } from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";
import Examples from "../Examples/Examples";
import Tools from "../Tools/Tools";
import Loader from "../../components/Loader/Loader";

const Home = () =>{
    const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 4000);
    },[])
    return(
        <>
            {isLoading ? 
            <div>
                <About />
                <Skills />
                <Examples />
                <Tools />
            </div>:
            <Loader />}
        </>
    )
}

export default Home;