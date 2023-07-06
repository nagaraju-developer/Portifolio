import "./heroimagestyles.css";
import React from 'react'
import Introimg from "../assets/intro-bg.jpg";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={Introimg} alt="Introimg"/>
        </div>
    </div>
  );
};

export default Heroimg