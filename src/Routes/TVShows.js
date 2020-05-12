// tvb drama 
// https://api.themoviedb.org/3/network/176?api_key=ad72e3da31fb5a89ff269c553aa812c6

import React,{Component} from 'react'
import config from '../config'
import axios from 'axios'
import {Link} from 'react-router-dom'
class TVShows extends Component {

    constructor() {
        super();
        this.state={
            popular:[]
        }
    }
    
    componentDidMount()
     {
        const popularURL= `https://api.themoviedb.org/3/tv/popular?api_key=${config.api_key}`
        axios.get(popularURL).then((res)=> {
            //console.log(res.data)
            this.setState({
                popular:res.data.results
            })
        })
    }

    render() {
        console.log(this.state.popular)
        const imageUrl = "http://image.tmdb.org/t/p/w300"
        const popularShows = this.state.popular.map((shows,index) => {
            return(
                <div className ="col s3" key={index}>
                <Link to={`/tvshows/${shows.id}`}>
                    <img src={`${imageUrl}${shows.poster_path}`} alt="shows" />
                </Link>
            </div>   
            )
        })
        return(
            <div className="row">
                  <h1 className="light-blue-text text-darken-1">Popular</h1>
                  {popularShows}
         </div>
        )
    }


}

export default TVShows