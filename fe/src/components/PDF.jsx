import React, { Component } from 'react';
import "../styles/pdf.css";

class PDF extends Component {
  state = {  }
  render() { 
    return (
      <div class="mainPdf jumbotron">
        <p id="container">{"Booking reference: " + this.props._id}</p>
        <p id="container">{"User name: " + this.props.username}</p>
        <h1 class="display-4">{"OUT: " + this.props.station + " -> "+ this.props.returnStation}</h1>
        <h3>{"Time: " + this.props.hours + ":" + this.props.minutes} </h3>
        <h3>{"Train: " + this.props.train}</h3>
        
        <h1 class="display-4">{"RETURN: " + this.props.returnStation + " -> "+ this.props.station}</h1>
        <h3>{"Time: " + this.props.returnHours + ":" + this.props.returnMinutes} </h3>
        <h3>{"Train: " + this.props.returnTrain}</h3>
        <p class="lead">Please have this ticket ready on your arrival to the station.</p>
        <hr class="my-4"/>
        <p class="lead">
          <button class="btn btn-primary btn-lg" href="/bookings" role="button">Show bookings online</button>
        </p>
      </div>
    );
  }
}
 
export default PDF;