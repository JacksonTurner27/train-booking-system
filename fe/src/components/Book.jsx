import React, { Component, useState } from 'react';
import axios from 'axios';
import Out from "./Out.jsx";
import Return from "./Return.jsx"

import "../styles/book.css";

export default class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            station: 'Ivelhurst',
            returnStation: 'Broklehurst',
            train: 'Victor',
            returnTrain: 'Nancy',
            hours: '10',
            minutes: '00',
            returnHours: '10',
            returnMinutes: '00',
            combinedDate: '10:00',
            combinedReturnDate: '10:00',
        }
    }   
    
    async handleChange (e) {
        await this.setState({ [e.target.name] : e.target.value });
     }


    getTrain() {
        if(this.state.station === 'Broklehurst') {
            this.setState({ returnStation: 'Ivelhurst' })
        if(this.state.minutes === '00') {
            this.setState({ train: 'Nancy' });
        } else { this.setState({ train: 'Victor' })};
        } else if(this.state.station === 'Ivelhurst') {
            this.setState({ returnStation: 'Broklehurst' })
            if(this.state.minutes === '00') {
                this.setState({ train: 'Victor'})
            } else {this.setState({ train: 'Nancy' })}
        }
    }

    getSecondTrain() {
        if(this.state.returnStation === 'Broklehurst') {
            if(this.state.returnMinutes == '30') {
                this.setState({ returnTrain: 'Victor'});
            } else { this.setState({ returnTrain: 'Nancy'})}
        } else if(this.state.returnStation === 'Ivelhurst') {
            if(this.state.returnMinutes == '30') {
                this.setState({ returnTrain: 'Nancy'});
            } else {this.setState({ returnTrain: 'Victor' })}
        }
    }

    updateStateAndGetTrains = async (e) => {
        await this.handleChange(e);
        this.getTrain();
        this.getSecondTrain();
    }

    updateStateAndReturnTrains = async (e) => {
        await this.handleChange(e);
        this.getSecondTrain();
    }

    handleClick(event) {
        const booking = {
            station: this.state.station,
            returnStation: this.state.returnStation,
            train: this.state.train,
            returnTrain: this.state.returnTrain,
            hours: this.state.hours,
            minutes: this.state.minutes,
            returnHours: this.state.returnHours,
            returnMinutes: this.state.returnMinutes,
            combinedDate: this.state.hours + ":" + this.state.minutes + ":" + this.state.train,
            combinedReturnDate: this.state.returnHours + ":" + this.state.returnMinutes + ":" + this.state.returnTrain,
        }
        axios.post('http://localhost:3001/book', booking)
    }

    render() {
        return (
            <div className="main container-fluid">
                <h4>Book</h4>
                <Out 
                    handleChange={this.handleChange.bind(this)}
                    updateStateAndGetTrains={this.updateStateAndGetTrains.bind(this)}
                    {...this.state}
                />
                <div className="info">
                    <h1 className="welcome">Travel Smart</h1>
                    <h5 className="covid">Please read our COVID-19 guidelines <br/> before booking. Thank you.</h5>
                </div>
                <Return
                    handleChange={this.handleChange.bind(this)}
                    updateStateAndReturnTrains={this.updateStateAndReturnTrains.bind(this)}
                    handleClick={this.handleClick.bind(this)}
                    {...this.state}
                />
            </div>
            
        )
    }
}
