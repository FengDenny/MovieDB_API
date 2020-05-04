import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Routes/Home'


function App() {
  return (
    <Router>
    <div className="App">
     <Route exact path="/" component={Home} />
    </div>
    </Router>
  );
}

export default App;
