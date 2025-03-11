import React, { useState } from "react";


const Navbar = ()=>{

  const [isOpen, setIsopen] = useState(false)

  return(
   <div className="Navbar">
    <span className={`nav-logo`}>CARhub</span>
    <div className={`nav-items ${isOpen && "open"}`}>
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
      <a href="/service">Service</a>
    </div>
    <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsopen(!isOpen)}>
      <div className="bar">

      </div>
    </div>
   </div>
  )
}

export default Navbar;