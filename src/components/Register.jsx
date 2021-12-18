import React from "react";
import TopBar from "./top-bar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from "./content";
import Footer from "./Footer";
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Podano następujące imię: ' + this.state.value);
        event.preventDefault();
    }


    render(){
        return (
            <div className="App">
                <TopBar/>
                <div className="Content">
                    <div className="Forms">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Login"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputPassword1"
                                       placeholder="Nazwa" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputPassword1"
                                       placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Hasło" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Wyrażam zgody marketingowe</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Zarejestruj się</button>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Login;

