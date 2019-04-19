import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import FriendsList from './components/FriendsList';
import AddForm from './components/AddForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Ya gotta have friends!</header>
        <NavLink to="/add">Add a new friend</NavLink>          
          <AddForm />
        

        <Route exact path="/" component={FriendsList} />
        
      </div>
    );
  }
}

export default App;
