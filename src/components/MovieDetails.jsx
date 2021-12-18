import React from "react";
import TopBar from "./top-bar";
import Content from "./content";
import Footer from "./Footer";
import cover from "../cover.jpg";
import {Link} from "react-router-dom";

const MovieDetails = () => {

    const picStyle = {
        alignItems: "left",
        height: "300px",
        width: "200px",
        float: "left",
        marginRight: "20px"
    }
    const movieTitle = {
        fontWeight: "bold",
    }

    return (
        <div className="App">
            <TopBar/>
            <div className="Content">
                <img style={picStyle} src={cover} className="App-logo" alt="logo" />
                <h1 style={movieTitle}>Rodzina soprano</h1>
                <h4>Rok produkcji: 1998</h4>
                <h4>Reżyser: Tomek</h4>
                <h4>Opis:</h4>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare velit vel mattis maximus. Donec a venenatis felis. Ut et congue libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc lacinia enim vel urna ullamcorper convallis. Integer vel nunc dapibus, imperdiet justo sed, faucibus nunc. Nunc eget est facilisis, vulputate sem malesuada, semper sem. Cras sed porttitor turpis. Vestibulum vehicula lacus quis orci feugiat cursus. In pharetra id sapien sed dignissim. Duis cursus pulvinar augue et maximus. In semper vulputate leo, non luctus augue imperdiet vel. Maecenas eros nulla, malesuada a dignissim sed, molestie sed nisi.</h6>
                <h5>Liczba odwiedzin: 991</h5>
            </div>
            <Footer/>
        </div>
    );
}

export default MovieDetails;

