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
        return (
            <form onSubmit={this.handleSubmit} style={{
                display: 'flex',
                flexDirection: 'row',
                width: '30%',
            }}>
                <input class="form-control" type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>alert('dzialam!')}>Search</button>
            </form>
        );
    }
}
export default SearchBar;