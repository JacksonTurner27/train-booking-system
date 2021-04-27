import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "../styles/navbar.css";

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <h3 className="title">Heritage Trains</h3>
                <h5><Link className="link" to="/">Home</Link></h5>
                <h5><Link className="link" to="/book">Book</Link></h5>
                <h5><Link className="link" to="/bookings">My Bookings</Link></h5>
                <h5><Link className="link" to="/report">Report</Link></h5>
            </nav>
        )
    }
}
 
export default Navbar;