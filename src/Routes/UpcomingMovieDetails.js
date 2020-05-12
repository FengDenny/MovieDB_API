import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'
import FontAwesome from './FontAwesome'


class UpcomingMovieDetail extends Component
{
    constructor()
    {

        super()
        this.state={
            movieDetail:{}
        }

    }

    componentDidMount()
    {
        const ID = this.props.match.params.movieID

        const singleMovieUrl = `https://api.themoviedb.org/3/movie/${ID}?api_key=${config.api_key}`

        axios.get(singleMovieUrl).then((res)=>{
            console.log(res.data)
           this.setState({
               movieDetail:res.data
            })
        })
    }

    render()
    {
        if(this.state.movieDetail.title === undefined)
        {
            return(
                <div className="spinner-wrapper">
                <FontAwesome/> 
            </div>
            )
        }

        const movieDetail = this.state.movieDetail
        const imageURL=  `http://image.tmdb.org/t/p/w300${movieDetail.poster_path}`;
        return(
            <div>
                <img src={imageURL} alt="cover" />
                <p>Title:{movieDetail.title}</p>

            </div>
        )
    }





}


export default UpcomingMovieDetail