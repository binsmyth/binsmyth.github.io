import React, { useEffect, useState } from "react";
import './Loader.css';

const Loader = () =>{
    return(
        <div className="container hideContainer">
          <div className="boxContainer">
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box3"></div>
            <div className="box box4"></div>
          </div>
        </div>
    )
}

export default Loader;
