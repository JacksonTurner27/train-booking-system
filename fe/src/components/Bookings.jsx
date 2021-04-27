import React, {useEffect, useState} from 'react';
import PDF from './PDF.jsx'
import ReactToPrint from 'react-to-print'

import "../styles/bookings.css";

export default class Bookings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
        }
    }

    componentDidMount() {
        fetch("/bookings").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => this.setState({ bookings: jsonRes }));
    }

    render() {
        return(
            <div className="mains container-fluid"> 
            <h4 className="bookingsTitle">My Bookings</h4>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Booking ID</th>
                <th scope="col">Station</th>
                <th scope="col">Return Station</th>
                <th scope="col">Train (Outbound)</th>
                <th scope="col">Train (Inbound)</th>
                <th scope="col">Leaving At</th>
                <th scope="col">Returning At</th>
                </tr>
            </thead>
            <tbody>
            {this.state.bookings.map(booking =>
                <tr>
                <td>{booking._id}</td>
                <td>{booking.station}</td>
                <td>{booking.returnStation}</td>
                <td>{booking.train}</td>
                <td>{booking.returnTrain}</td>
                <td>{booking.hours + ":" + booking.minutes}</td>
                <td>{booking.returnHours + ":" + booking.returnMinutes}</td>
                <ReactToPrint
                    trigger={() => <button>Print ticket</button>}
                    content={() => this.componentRef}
                />
                <div style={{display: 'none', color: 'black'}}>
                    <PDF
                        {...booking}
                        {...this.props}
                        ref={el =>(this.componentRef = el)}
                        />
                </div>
                </tr>
            )}
            </tbody>
            </table>
            </div>
        ) 
    }

}