import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
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
        const link = "details/" + this.props.id;
        return(
            <div style={movieStyle}>
                <Link to={link}><img style={picStyle} src={this.props.image} className="App-logo" alt="logo" /></Link>
                <div style={movieDescription}>
                    <Link to={link}><h5 style={movieTitle}>{this.props.title}</h5></Link>
                </div>
            </div>
        )
    }

}
export default Movie;
