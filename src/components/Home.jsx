import React from "react";
import TopBar from "./top-bar";
import Content from "./content";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="App">
            <TopBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Home;

