import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Ya gotta have friends!</header>
        <NavLink to="/add">Add a new friend</NavLink>

        

        <Route exact path="/" component={FriendsList} />
        
      </div>
    );
  }
}

export default App;
