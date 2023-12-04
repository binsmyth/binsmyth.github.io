import React from "react";
import example1 from '../../images/example1.png';
import example2 from '../../images/example2.png';
import './Examples.css';
const Examples = () =>{
    return(
        <div id="examples" className="example">
            <h1>Some of my work.</h1>
            <div className="example-showcase-details">
                <div id="example" className="example-div">
                        <img src={example1} alt="example" className="work-examples"/>
                        <div className="description">
                            <p className="example-description">Built with react.This is a restaurant website with functionality to order foods online. </p>
                        </div>
                </div>
                <div className="example-details">
                    <h2>Himalayan Spice Haven</h2>
                    I built this app for Himalayan Spice Haven that would allow them to get orders from their customer through online system.
                    <div className="example-links"><a href="https://google.com" className="example-view-live">View Live</a> <a href="#" className="example-view-live">View Code</a></div>
                </div>
            {/* </div>
            <div className="example-showcase-details"> */}
                <div id="example" className="example-div">
                    <img src={example2} alt="example" className="work-examples"/>
                    <div className="description">
                        <p className="example-description">This is a pokedex app built with react. It uses poke api. </p>
                    </div>
                </div>
                <div className="example-details">
                    <h2>Pokedex</h2>
                    This app helps anyone interested in world of pokemon to quickly view stats on different pokemons.
                    <div className="example-links"><a href="https://63d1f5c1fdc6420009d8d627--relaxed-raindrop-d51fe7.netlify.app/" className="example-view-live">View Live</a> <a href="https://github.com/binsmyth/pokedex" className="example-view-live">View Code</a></div>
                </div>
            </div>
        </div>
    )
}

export default Examples;