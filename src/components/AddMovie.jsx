import React from "react";
import TopBar from "./top-bar";
import Content from "./content";
import Footer from "./Footer";
import {Link} from "react-router-dom";

class AddMovie extends React.Component {
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


    render(){
        return (
            <div className="App">
                <TopBar/>
                <div className="Content">
                    <div className="Forms">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Tytuł filmu</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Ojciec chrzestny"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Rok produkcji</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="1972"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Reżyser</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Francis Ford Coppola"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Okładka</label><br/>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Opis filmu</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Dodaj film</button>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AddMovie;

