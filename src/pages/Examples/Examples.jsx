import React from "react";
import example1 from '../../images/example1.jpg';
import './Examples.css';
const Examples = () =>{
    return(
        <>
            <h1>Some of my work.</h1>
            <div className="example-borders">
                <img src={example1} alt="example" className="work-examples"/>
            </div>
        </>
    )
}

export default Examples;