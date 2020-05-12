import React,{Component} from 'react';
import axios from 'axios'
import config from '../config'
import FontAwesome from '../Routes/FontAwesome'

class TVDetails extends Component {
    constructor()
    {
        super();
        this.state={
            // declare an empty object
            shows:{}
        }
    }

    componentDidMount()
    {
        const mid = this.props.match.params.tvShowID
        const singleTVShowURl=`https://api.themoviedb.org/3/tv/${mid}?api_key=${config.api_key}`

        axios.get(singleTVShowURl).then((res)=> {
            //console.log(res.data)
            this.setState({
                shows:res.data   
            })
        })
    }


    render()
    {
         console.log(this.props.match)

         if(this.state.shows.original_name===undefined)
         {
             return(
                 <div className="spinner-wrapper">
                     <FontAwesome />
                 </div>
             )
         }
         const shows= this.state.shows 
         const imageURL =  `http://image.tmdb.org/t/p/w300${shows.poster_path}`;
        return( 
            <div>
                <img src= {imageURL} alt="shows"/>  
                <p>Title: {shows.original_name}</p>
                <p>Overview: {shows.overview}</p>
                <p>Number of seasons: {shows.number_of_seasons} </p>
              {/* to iterate nested api array using map */}
                {shows.networks.map((network,i) => {
                return(
                 <p key={i}>Network: {network.name}  </p>)}
                 )}
                
              
            </div>
           
        )
    }



}   


export default TVDetails