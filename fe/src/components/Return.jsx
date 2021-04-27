import React, { Component } from 'react';
import Modal from 'react-modal';

class Return extends React.Component {
    constructor(props){
        super(props);
    }
    render() { 
        
        return (
        <div className="card return">
        <div className="card-body c">
        <form action="select">
        <div>
        <h5 className="outText">RETURN</h5>
        <p>Return station</p>
        <select name="returnStation" value={this.props.returnStation} onChange={this.props.updateStateAndReturnTrains.bind(this)} disabled className="form-select">
            <option>Ivelhurst</option>
            <option>Broklehurst</option>
        </select>
        </div>
        <div>
        <p>What time will you be departing?</p>
        <select name="returnHours" onChange={this.props.handleChange.bind(this)}>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
        </select>
        <select name="returnMinutes" onChange={this.props.updateStateAndReturnTrains.bind(this)}>
            <option>00</option>
            <option>30</option>
        </select>
        </div>
        <div>
            <p>Selected train</p>
            <input type="text" name="returnTrain" value={this.props.returnTrain} disabled/>
        </div>

        <div className="book">
            <a href="#" className="btn btn-primary" onClick={this.props.handleClick}>Book</a>
        </div>
    </form>
    </div>
    
    </div>
    
    );
    }
}
 
export default Return;