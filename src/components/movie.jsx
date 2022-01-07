import React, {Component} from 'react';
import SearchBar from "./search-bar";
import 'bootstrap/dist/css/bootstrap.min.css'
import cover from "../cover.jpg";
import {Link} from "react-router-dom";

class Movie extends Component {


    render(){
        const movieStyle={
            color: "white",
            backgroundColor: "#323232",
            height: "380px",
            width: "200px",
            display: "inline-block",
        }
        const picStyle = {
            alignItems: "left",
            height: "300px",
            width: "200px",
            float: "right",
        }
        const movieTitle = {
            fontWeight: "bold",
            textAlign: "center",
        }
        const movieDescription = {
            justifyContent: "spaceAround",
            paddingLeft: "10px",

        }
        return(
            <div style={movieStyle}>
                <Link to="details"><img style={picStyle} src={this.props.image} className="App-logo" alt="logo" /></Link>
                <div style={movieDescription}>
                    <Link to="details"><h5 style={movieTitle}>{this.props.title}</h5></Link>
                </div>
            </div>
        )
    }

}
export default Movie;
