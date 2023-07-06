import { Link } from "react-router-dom"
import "./navbarstyles.css"
import React, { useState } from 'react'
import {FaBars,Fa, FaTimes} from "react-icons/fa"
const Navbar = () => {

const [click,setClick]=useState(false);
const handleClick=()=>setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <Link>
        <ul className={click ? "nav-menu active": "nav-menu"}>
          <li>
            <Link to="/">   Home</Link>
          </li>
          <li>
            <Link to="/project"> Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click? (
          <FaTimes   size={20} style={{color:"white"}}/>
          ) :
          (
            <FaBars  size={20} style={{color:"white"}}/>
          )}
          
         

        </div>
        </Link>

    </div>
  )
}

export default Navbar