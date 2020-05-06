import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import FontAwesome from './FontAwesome'


class Movie extends Component {

    constructor()
    {
        super();
        this.state = {
            // starting movie with an empty object
            movie:{}
        }
    }


    componentDidMount()
    {
        const mid = this.props.match.params.movieID
        const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`

    
        axios.get(singleMovieUrl).then((res) => {

            console.log(res.data)
            this.setState({
                movie:res.data
            })
        })


    }



    render(){
        console.log(this.props.match)
        if(this.state.movie.title === undefined)
        {
            return(
                <div className="spinner-wrapper">
                    <FontAwesome/> 
                </div>
            )

        }
        const movie = this.state.movie
        const imageURL =  `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
        return(
            
            <div>
               <img src= {imageURL} alt="cover" />
               <p> Title: {movie.title}</p>
               <p> Budget: {movie.budget}</p>
               <p> Tagline: {movie.tagline}</p>
               <p> Overview: {movie.overview}</p>
             </div>
        )
        
    }
}

export default Movie