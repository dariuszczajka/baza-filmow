import React from "react";
import TopBar from "./top-bar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from "./content";
import Footer from "./Footer";
import {Link} from "react-router-dom";
const axios = require('axios');

class Login extends React.Component {

    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
        this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: this.state.account.username,
                password: this.state.account.password
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Given username does\'t exists or password is wrong!';
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };

    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };

    render(){
        return (
            <div className="App">
                <TopBar/>
                <div className="Content">
                    <div className="Forms">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input value={this.state.account.username}
                                       name="username"
                                       type="text"
                                       onChange={this.handleChange}
                                       className="form-control"
                                       id="username"
                                       aria-describedby="emailHelp"
                                       placeholder="Login"/>
                            </div>
                            {this.state.errors.username &&
                            <div className="alert alert-danger">{this.state.errors.username}</div>}
                            <div className="form-group">
                                <input value={this.state.account.password}
                                       name="password"
                                       onChange={this.handleChange}
                                       type="password"
                                       className="form-control"
                                       id="password"
                                       placeholder="Hasło" />
                            </div>
                            {this.state.errors.password &&
                            <div className="alert alert-danger">{this.state.errors.password}</div>}
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Zapamiętaj mnie</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Zaloguj</button>
                        </form>
                        <p>Nie masz konta?</p>
                        <Link to="/signup">Zarejestruj się!</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Login;

