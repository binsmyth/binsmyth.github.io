import React from "react";
import example1 from '../../images/example1.jpg';
import './Examples.css';
const Examples = () =>{
    return(
        <div id="examples" className="example">
            <h1>Some of my work.</h1>
            <div id="example" className="example-div">
                <img src={example1} alt="example" className="work-examples"/>
                <div className="description">
                    <p className="example-description">Built with react.This is a restaurant website with functionality to order foods online. </p>
                    <div className="links">
                        <p className="example-link">Demo</p>
                        <p className="">Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples;