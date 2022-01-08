import React, {useEffect, useState} from "react";
import TopBar from "./top-bar";
import Footer from "./Footer";
import {useParams} from "react-router-dom";

const MovieDetails = () => {

    let { id } = useParams();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    fetch(
        "https://pr-movies.herokuapp.com/api/movies/" + id)
        .then((res) => res.json())
        .then((json) => {
            setTitle(json.title);
            setImage(json.image);
            setContent(json.content);
        })

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
                <img style={picStyle} src={image} className="App-logo" alt="logo" />
                <h1 style={movieTitle}>{title}</h1>
                <h4>Opis:</h4>
                <h6>{content}</h6>
            </div>
            <Footer/>
        </div>
    );
}

export default MovieDetails;

