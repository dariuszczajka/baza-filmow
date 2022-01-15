import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from "./movie";

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoaded: false,
        };

    }

    componentDidMount() {
        fetch(
            "https://pr-movies.herokuapp.com/api/movies")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    movies: json,
                    isLoaded: true
                });
            })
    }

    render(){
        const contentStyle={
            justifyContent: 'space-evenly',
            alignContent: 'stretch',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            columnGap: 100,
            rowGap: 50,
        }
        const {isLoaded, movies} = this.state;
        if (!isLoaded) return (
            <div className="Content" style={contentStyle}>
                <h1>Przygotowuję dla Ciebie filmy...</h1>
            </div>
        ) ;

        for(let i=0;i<movies.length;i++){
            if(movies[i].title === undefined){
                movies.splice(i,1)
                i--;
            }
        }

        return(
            <div className="Content" style={contentStyle}>
                {movies.map((movie) => (
                    <Movie title={movie.title} image={movie.image} id={movie.id}/>
                ))}
            </div>
        )
    }

}
export default Content;
