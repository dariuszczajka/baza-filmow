import React from "react";
import TopBar from "./top-bar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="App">
            <TopBar/>
                <div className="Content">
                    <h1>Błąd 404</h1>
                    <p>Przykro mi, ale nic tu nie ma. Kliknij <Link to={"/"}>tutaj</Link> aby wrócić na stronę główną.</p>
                </div>
            <Footer/>
        </div>
    );
}

export default NotFound;