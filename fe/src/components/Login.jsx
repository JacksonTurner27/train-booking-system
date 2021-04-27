import React, { Component } from 'react';
import "../styles/login.css";

class Login extends Component {
    state = {
        username: "",
        password: "",
        users: [],
    }

    async componentDidMount() {
        await fetch("/users").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => this.setState({ users: jsonRes }));
    }

    handleChange (e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleLogin(e) {
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        this.state.users.forEach(stateUser => {
            stateUser = {
                username: stateUser.username,
                password: stateUser.password
            }
            if(JSON.stringify(stateUser) === JSON.stringify(user)) {
                this.props.onChange(e);
            } else {
                console.log("Failed to login")
            }
        });
    }
    
    render() { 
        return (
            <div className="mainLogin">
                <div className="mainLogin">
                <h1>Heritage Trains</h1>
                <div className="formDiv">
                <h2>Login</h2>
                    <form className="col-sm-12 loginForm">
                    <div className="form-group">
                        <label>Username</label>
                        <input id="username" type="username" className="form-control" placeholder="Username" name="username" onChange={ (e) => this.handleChange(e)} nameplaceholder="Enter username" ></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="password" type="password" className="form-control" placeholder="Password" name="password" onChange={ (e) => this.handleChange(e)}></input>
                    </div>
                    <button id="submit" className="btn btn-lg btn-success center" name="username" value={this.state.username} onClick={ (e) => this.handleLogin(e)}>Login</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}
 
export default Login;