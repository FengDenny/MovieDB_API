import React, { Component} from 'react'
import config from '../config'
import axios from 'axios'
import {Link} from 'react-router-dom'

// upcomingURL=https://api.themoviedb.org/3/movie/upcoming?api_key=


class UpcomingMovies extends Component {

    constructor()
    {
        super()
        this.state={
            upcomingMovie:[]
        }
    }

    componentDidMount()
    {
    const upcomingURL=`https://api.themoviedb.org/3/movie/upcoming?api_key=${config.api_key}`

    axios.get(upcomingURL).then((res)=> {
        console.log(res.data)
        const upcomingData = res.data.results
        this.setState({
            upcomingMovie: upcomingData
        })

    })

    }

    render()
    {
        console.log(this.state.upcomingMovie)
        const imageUrl = "http://image.tmdb.org/t/p/w300"

        const upcoming = this.state.upcomingMovie.map((movie,index)  => 
        {
            
            return(
                <div className="col s3" key={index}>

                    <Link to={`/movie/upcoming/${movie.id}`}>
                        <img src={`${imageUrl}${movie.poster_path}`} alt="upcoming"/>
                    </Link>
                    
                     </div>
            )

        })



        return(
            <div className="row">
            <h1 className="light-blue-text text-darken-1">Upcoming</h1>
            {upcoming}
            </div>
        )
    }




}

export default UpcomingMovies