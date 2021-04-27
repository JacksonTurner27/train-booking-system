import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Book from './components/Book.jsx';
import Bookings from './components/Bookings.jsx';
import Report from './components/Report.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

export default class App extends Component {
  state = {
    username: null
  }

  handleChange (e) {
    this.setState({ [e.target.name] : e.target.value });
 }

  render() { 
    if(!this.state.username) {
      return (
        <React.Fragment>
          <Login
          onChange={this.handleChange.bind(this)}
        />
        <Register
        />
        </React.Fragment>
      )
    } else {
      return (
        <Router>
          <Navbar
            username={this.state.username}
          />
    
          <Route path="/" exact>
            <Home
              username={this.state.username}
            />
          </Route>
    
          <Route path="/book">
            <Book
              username={this.state.username}
            />
          </Route>
    
          <Route path="/bookings">
            <Bookings
              username={this.state.username}
            />
          </Route>
    
          <Route path="/report">
            <Report
              username={this.state.username}
            />
          </Route>
        </Router>
      )
    }
  }
}
