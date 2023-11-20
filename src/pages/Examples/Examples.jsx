import React from "react";
import example1 from '../../images/example1.png';
import './Examples.css';
const Examples = () =>{
    return(
        <div id="examples" className="example">
            <h1>Some of my work.</h1>
            <div className="example-showcase-details">
                <div id="example" className="example-div">
                        <img src={example1} alt="example" className="work-examples"/>
                        <div className="description">
                            <h2>Himalayan Spice Heaven</h2>
                            <p className="example-description">Built with react.This is a restaurant website with functionality to order foods online. </p>
                            <div className="example-links"><a href="https://google.com" className="example-view-live">View Live</a> <a href="#" className="example-view-live">View Code</a></div>
                    </div>
                </div>
                <div className="example-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem qui ea voluptatum, ipsam eum alias possimus praesentium adipisci, eos modi ut animi voluptatem cumque aut nihil repudiandae velit iusto?</div>
            </div>
            <div id="example" className="example-div">
                <img src={example1} alt="example" className="work-examples"/>
                <div className="description">
                    <h2>Himalayan Spice Heaven</h2>
                    <p className="example-description">Built with react.This is a restaurant website with functionality to order foods online. </p>
                    <div className="example-links"><a href="https://google.com" className="example-view-live">View Live</a> <a href="#" className="example-view-live">View Code</a></div>
                </div>
            </div>
        </div>
    )
}

export default Examples;