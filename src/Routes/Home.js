import React, { Component } from 'react';
import axios from 'axios';
import config from '../config'
import {Link} from 'react-router-dom'

// const apiKey = "ad72e3da31fb5a89ff269c553aa812c6";
// const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
// const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
// const imageUrl = "http://image.tmdb.org/t/p/w300";

class Home extends Component {

    constructor()
    {
        super();
        this.state ={
            // Declare movieList as array
            movieList:[]
        }
    }
          //create a const variable nowPlayingUrl ot link to api db
        // Getting API with component Lifecycle using axios
        componentDidMount()
        {
            const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;

            axios.get(nowPlayingUrl).then((res)=> {
                //console.log(res.data)
                const movieData = res.data.results
                this.setState({
                    movieList: movieData
                })
            })

        }
    render() {
            console.log(this.state.movieList)
        return(
         
            <div className="col s3">
                <h1>Movie Database</h1>
            </div>
        )



    }

}

export default Home;