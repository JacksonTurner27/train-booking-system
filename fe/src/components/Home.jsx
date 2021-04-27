import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css";


class Home extends Component {
    state = {
        
    }
    render() { 
        return (
            <div className="mainHome">
                <div className="welcome">
                    <h1 className="text">Heritage Trains</h1>
                    <h1>Welcome back, {this.props.username}</h1>
                    <p>Helping you find your way in the darkness.</p>
                </div>
            </div>
            
        )
    }
}

export default Home;
 