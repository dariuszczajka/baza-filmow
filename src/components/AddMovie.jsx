import React from "react";
import TopBar from "./top-bar";
import Footer from "./Footer";
import axios from "axios";

class AddMovie extends React.Component {
    state = {
        movie: {
            title: "",
            image: "",
            content: "",
        },
        errors: {}
    };
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeRoute = () => {
        alert("Udało się dodać Twój film!");
        this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {movie} = this.state;
        if (movie.title.trim() === '') {
            errors.title = 'Title is required!';
        }
        if (movie.image.trim() === '') {
            errors.image = 'Password is required!';
        }
        if (movie.content.trim() === '') {
            errors.content = 'Opis jest wymagany!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleChange = (event) => {
        const movie = {...this.state.movie};
        movie[event.currentTarget.name] = event.currentTarget.value;
        this.setState({movie});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: this.state.movie.title,
                image: this.state.movie.image,
                content: this.state.movie.content,
            }
        }).then((response) => {
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };


    render(){
        return (
            <div className="App">
                <TopBar/>
                <div className="Content">
                    <div className="Forms">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Tytuł filmu</label>
                                <input value={this.state.movie.title}
                                       name="title"
                                       onChange={this.handleChange}
                                       type="text"
                                       className="form-control"
                                       id="exampleFormControlInput1"
                                       placeholder="Ojciec chrzestny"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Okładka (link)</label><br/>
                                <input value={this.state.movie.image}
                                       name="image"
                                       onChange={this.handleChange}
                                       type="text"
                                       className="form-control"
                                       id="exampleFormControlInput1"
                                       placeholder="www.example.com/image.jpg"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Opis filmu</label>
                                <textarea value={this.state.movie.content}
                                          name="content"
                                          onChange={this.handleChange}
                                          className="form-control"
                                          id="exampleFormControlTextarea1"
                                          rows="3"/>
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

