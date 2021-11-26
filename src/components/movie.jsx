import React, {Component} from 'react';
import SearchBar from "./search-bar";
import 'bootstrap/dist/css/bootstrap.min.css'
import cover from "../cover.jpg";

class Movie extends Component {


    render(){
        const movieStyle={
            color: "white",
            backgroundColor: "#323232",
            height: "425px",
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
        }
        const movieDescription = {
            paddingTop: "40px",
            paddingLeft: "10px",
        }
        return(
            <div style={movieStyle}>
                <img style={picStyle} src={cover} className="App-logo" alt="logo" />
                <div style={movieDescription}>
                    <h5 style={movieTitle}>{this.props.title}</h5>
                    <h6>Rok produkcji: {this.props.year}</h6>
                    <h6>Reżyser: {this.props.director}</h6>
                    <h6>Liczba odwiedzin: {this.props.popularity}</h6>
                </div>
            </div>
        )
    }

}
export default Movie;