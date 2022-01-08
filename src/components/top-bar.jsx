import React, {Component} from 'react';
import SearchBar from "./search-bar";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../logo.png";
import {BrowserRouter, Link} from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

const TopBar = () => {

    const user = (decodeToken(localStorage.getItem('token')));
    const isNotLogged = (isExpired(localStorage.getItem('token')));

    const links = {
        paddingLeft: '15px',
    }

    const loginStyle = {
        display: 'flex',
        flexDirection: 'row',
    }


    return(
        <div>
            <nav className="navbar navbar-dark" style={{
                backgroundColor: "#323232",
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
            }}>
                <Link to={"/"} className="navbar-brand" href="#">
                    <img src={logo} width="40" height="40"
                         className="d-inline-block align-top" alt=""/>
                    MovieDatabase
                </Link>

                <SearchBar/>
                
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {isNotLogged && <li className="nav-item active" style={loginStyle}>
                        <Link to="/signin" style={links} className="nav-link" href="#">Zaloguj się</Link>
                    </li>}
                    {!isNotLogged && <li className="nav-item active" style={loginStyle}>
                        <span style={links} className="navbar-text">Cześć, {user.name}</span>
                        <Link to="/addMovie" style={links} className="nav-link" href="#">Dodaj nowy film</Link>
                        <Link to="/" style={links} onClick={() => localStorage.removeItem('token')} className="nav-link" href="#">Wyloguj się</Link>
                    </li>}
                </ul>

            </nav>
        </div>
        )
    }

export default TopBar;
