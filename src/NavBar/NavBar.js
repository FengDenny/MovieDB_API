import React from 'react';
import {NavLink} from 'react-router-dom'
import './NavBar.css'


function NavBar()
{
    return (
        
  <nav className="black">
  <div className="nav-wrapper">
    <NavLink exact to="#" className="brand-logo center">Movie DB</NavLink>
    <ul id="nav-mobile" className="left hide-on-med-and-down">
      <li><NavLink to="/movie">Sass</NavLink></li>
      <li><NavLink to="badges.html">Components</NavLink></li>
      <li><NavLink to="collapsible.html">JavaScript</NavLink></li>
    </ul>
  </div>
</nav>
      
    )
}

export default NavBar