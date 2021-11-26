import React, {Component} from 'react';

import TopBar from "./top-bar.jsx";
import searchIcon from "../search.png";
import {FaSearch} from "react-icons/all";
import {Button} from "bootstrap";


class SearchBar extends Component {
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

    render() {
        const searchBarStyle={
            width: "75%",
            justifyContent: "center",
        }
        const labelStyle={
            width: "90%",
        }
        const searchStyle={
            paddingLeft: "5px",
        }

        return (
            <form onSubmit={this.handleSubmit} style={searchBarStyle}>
                <label style={labelStyle}>
                    <input class="form-control mr-sm-2" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <FaSearch size={"2em"} color={"#ffffff"} style={searchStyle}/>
            </form>
        );
    }
}
export default SearchBar;