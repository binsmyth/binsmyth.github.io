import React from "react";
import example1 from '../../images/example1.png';
import example2 from '../../images/example2.png';
import './Examples.css';
import { exampleJSON } from "./ExampleJSON";


const Examples = () =>{
    return(
        <div id="examples" className="example">
            <h1>Some of my work.</h1>
            <div className="example-showcase-details">
                {
                    exampleJSON.map(value => (
                        <>
                            <div className="example-div">
                            <img src={value.src} alt="example" className="work-examples"/>
                                <div className="description">
                                    <p className="example-description">{value.builtwith}</p>
                                </div>
                            </div>
                            <div className="example-details">
                                <h2>{value.name}</h2>
                                {value.description}
                                <div className="example-links"><a href={value.url} className="example-view-live" target="_blank">View Live</a><a href={value.repo} target="_blank" className="example-view-live">View Code</a></div>
                            </div>
                        </>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Examples;