import React from "react";
import TopBar from "./top-bar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const PermissionDenied = () => {
    return (
        <div className="App">
            <TopBar/>
                <div className="Content">
                    <h1>Błąd 403</h1>
                    <p>Hola hola! Nie masz dostępu do tej strony. Aby go uzyskać, musisz się <Link to={"/signin"}>zalogować</Link></p>
                </div>
            <Footer/>
        </div>
    );
}

export default PermissionDenied;