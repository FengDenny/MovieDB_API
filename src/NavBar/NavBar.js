import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './NavBar.css'
import Dropdown from './Dropdown'
import './Dropdown.css'

class  NavBar extends Component 
{

  constructor()
  {
    super()
    this.state=
    {
      movieTitle:"",
      showTitle:"",
      trendingTitle:"",
    }
  }

  componentDidMount()
  {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = window.M.Dropdown.init(elems);

  }

  render()
   {
    return (
    
      <div className="navbar-fixed">  
     <nav className="light-blue darken-1">
     <div className="nav-wrapper">
       <NavLink exact to="#" className="brand-logo center">Movie DB</NavLink>
       <ul id="nav-mobile" className="left hide-on-med-and-down">
         <li><NavLink to="/" > <Dropdown movieTitle="Movie"/></NavLink></li>
         <li><NavLink to="/tvshows" ><Dropdown showTitle="TV Shows"/></NavLink></li>
         <li><NavLink to="/trending"><Dropdown trendingTitle="Trending" /></NavLink></li>
         
       </ul> 
     </div>
   </nav> 
   </div>  
  
     )
  }
}

export default NavBar