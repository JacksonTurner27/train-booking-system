import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    state = {
        username: '',
        password: '',
        registered: false,
    }

    async handleChange (e) {
        await this.setState({ [e.target.name] : e.target.value });
     }

    handleClick(e) {
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:3001/user', user);
        this.setState({ registered: true })
    }

    render() { 
        return (
            <div class="register">
                <h2>Register</h2>
                    <form class="col-sm-12 loginForm">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="username" class="form-control" placeholder="Username" name="username" onChange={ (e) => this.handleChange(e)} nameplaceholder="Enter username" ></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" placeholder="Password" name="password" onChange={ (e) => this.handleChange(e)}></input>
                    </div>
                    <button className="btn btn-lg btn-success center" name="username" value={this.state.username} onClick={ (e) => this.handleClick(e)}>Register</button>
                    </form>
                    {this.state.registered && <h5>Successfully registered.</h5>}
                </div>
        );
    }
}
 
export default Register;