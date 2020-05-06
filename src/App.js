import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Routes/Home'
import Movie from './Routes/Movie'
import NavBar from './NavBar/NavBar'


function App() {
  return (
    <Router>
      
    <div className="App">
      <NavBar />
     <Route exact path="/" component={Home} />
     <Route exact path="/movie/:movieID" component={Movie} />
    </div>
    </Router>
  );
}

export default App;
