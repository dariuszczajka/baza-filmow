import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from "./movie";

class Footer extends Component {

    render(){
        const footerStyle={
            backgroundColor: "#323232",
            display: "flex",
            justifyContent: "center",
            color: "white",
        }
        return(
            <div style={footerStyle}>
                <p>Copyrights © Dariusz Czajka | 2021</p>
            </div>
        )
    }

}
export default Footer;