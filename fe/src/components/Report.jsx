import React, { Component } from 'react';
import "../styles/report.css";


class Report extends Component {
    constructor(props){
        super(props);
        this.state = {
            bookings: []
        }
    }

    async componentDidMount() {
        await fetch("/bookings").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => this.setState({ bookings: jsonRes}));

        var bookings = this.groupByArray(this.state.bookings, "combinedDate");

        this.setState({ bookings: bookings })
    }


    groupByArray(xs, key) { 
        return xs.reduce(function (rv, x) {
            let v = key instanceof Function ? key(x) : x[key]; 
            let el = rv.find((r) => r && r.key === v); 
            if (el) { el.values.push(x); } 
            else { rv.push({ key: v, values: [x] });
        } 
        return rv; }, []); 
    } 

    getWord(length) {
        return length > 1 ? "are" : "is";
    }

    render() { 
        return (
            <div className="mainReport">
                <h4 className="welcome">Report</h4>
                {this.state.bookings.map(book => 
                    <div onClick={() => { console.log(book) }} className="jumbotron">
                        <h3>There {this.getWord(book.values && book.values.length)} { book && book.values && book.values.length } train bookings on { book && book.values && book.values[0].train } today at { book && book.values && book.values[0].hours + ":" + book.values[0].minutes}:</h3>
                        <table className="table">
                            <thead>
                                <th>Train Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Train Time</th>
                                <th>Seats Booked</th>
                                <th>Seats Remaining</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{book && book.values && book.values[0].train}</td>
                                    <td>{book && book.values && book.values[0].station}</td>
                                    <td>{book && book.values && book.values[0].returnStation}</td>
                                    <td>{book && book.values && book.values[0].hours + ":" + book.values[0].minutes}</td>
                                    <td>{book && book.values && book.values.length}</td>
                                    <td>{book && book.values && 120 - book.values.length}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            
        );
    }
}
 
export default Report;