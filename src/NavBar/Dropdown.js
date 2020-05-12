import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Dropdown extends Component 

{
    render()
    {
    return(
    <div>
    {/* Movie Dropdown */}
    <NavLink className='dropdown-trigger' to='#' data-target='dropdown1'>{this.props.movieTitle}</NavLink>
    <ul id='dropdown1' className='dropdown-content dropdown'>
    <li><NavLink to="/movie/upcoming">Upcoming Movies</NavLink></li>
    <li className="divider" tabindex="-1"></li>
        <li><NavLink to="#!">Popular</NavLink></li>
        <li className="divider" tabindex="-1"></li>
        <li><NavLink to="#!">three</NavLink></li>
    </ul> 
    {/* Show Dropdown */}
        <NavLink className='dropdown-trigger' to='#' data-target='dropdown2'>{this.props.showTitle}</NavLink>
        <ul id='dropdown2' className='dropdown-content dropdown'>
        <li><NavLink to="/tvshows/upcoming">Upcoming Shows</NavLink></li>
        <li className="divider" tabindex="-1"></li>
        <li><NavLink to="/tvshows">Popular</NavLink></li>
        <li className="divider" tabindex="-1"></li>
        <li><NavLink to="#!">three</NavLink></li>
        </ul> 
    </div>
  
        )

}

}


export default Dropdown