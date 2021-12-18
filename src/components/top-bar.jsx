import React, {Component} from 'react';
import SearchBar from "./search-bar";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../logo.png";
import {Link} from "react-router-dom";

class TopBar extends Component {

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Zapytanie: ' + this.state.value);
        event.preventDefault();
    }


    render(){
        const topBarStyle= {
            backgroundColor: "#323232",
        }
        const test={
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return(
            <div style={topBarStyle}>
                <div class="container">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <Link to={"/"} className="navbar-brand" href="#">
                        <img src={logo} width="40" height="40"
                             className="d-inline-block align-top" alt=""/>
                            MovieDatabase
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <SearchBar style={test}/>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="/signin" className="nav-link" href="#">Zaloguj się</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                </div>
            </div>

        )
    }

}
export default TopBar;
