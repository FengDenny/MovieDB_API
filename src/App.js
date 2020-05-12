import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Routes/Home'
import Movie from './Routes/Movie'
import TVShows from './Routes/TVShows'
import TVDetails from './View/TVDetails'
import Trending from './Routes/Trending'
import NavBar from './NavBar/NavBar'
import UpcomingMovies from './Routes/UpcomingMovies'
import UpcomingMovieDetails from './Routes/UpcomingMovieDetails'
import UpcomingTVShows from './Routes/UpcomingTVShows'
import TrendingMovies from './Routes/TrendingMovies'


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      
      <div className="container">
      {/* exact patch for non-nested routes, path for nested routed*/}
      {/* Movie Route */}
     <Route exact path="/" component={Home} />
     <Route  exact path="/movie/upcoming" component={UpcomingMovies} />
     <Route  path="/movie/upcoming/:movieID" component={UpcomingMovieDetails} />
     <Route  path="/movie/:movieID" component={Movie} />
     {/* TV Show Route */}
     <Route  exact path="/tvshows" component={TVShows} />
     <Route  exact path="/tvshows/upcoming" component={UpcomingTVShows} />
     <Route  path="/tvshows/:tvShowID" component={TVDetails} />
     {/* Trending Route */}
     <Route  path="/trending" component={Trending} />
     <Route  path="/trending/trending-movies" component={TrendingMovies} />
    </div>
    </div>
    </Router>
  );
}

export default App;
