import React, { Component } from 'react';
import "../styles/book.css";

class Out extends React.Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
        <div className="card out">
        <div className="card-body">
        <form className="outForm" action="select">
        <div>
        <h5 className="outText">OUT</h5>
        <p>Where would you like to go?</p>
        <select name="station" value={this.props.station} onChange={this.props.updateStateAndGetTrains.bind(this)} className="form-select">
            <option>Ivelhurst</option>
            <option>Broklehurst</option>
        </select>
        </div>
        <div>
        <p>What time will you be departing?</p>
        <select name="hours" onChange={this.props.handleChange.bind(this)}>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
        </select>
        <select name="minutes" onChange={this.props.updateStateAndGetTrains.bind(this)}>
            <option>00</option>
            <option>30</option>
        </select>
        </div>
        <div>
            <p>Selected train</p>
            <input type="text" name="train" value={this.props.train} disabled/>
        </div>
    </form>
    </div>
    
    </div>
    );
    }
}
 
export default Out;