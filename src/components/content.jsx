import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from "./movie";

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoaded: false
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
/*
    componentDidMount() {
        var testowy =  "[{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224225c760cccca6e7fc\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224825c760cccca6e7ff\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6226dcd0ef1aadc60586c\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d622b26464feb8e75e2046\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224225c760cccca6e7fc\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224825c760cccca6e7ff\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6226dcd0ef1aadc60586c\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d622b26464feb8e75e2046\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224225c760cccca6e7fc\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224825c760cccca6e7ff\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6226dcd0ef1aadc60586c\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d622b26464feb8e75e2046\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224225c760cccca6e7fc\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224825c760cccca6e7ff\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6226dcd0ef1aadc60586c\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d622b26464feb8e75e2046\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224225c760cccca6e7fc\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224825c760cccca6e7ff\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6226dcd0ef1aadc60586c\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d622b26464feb8e75e2046\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224225c760cccca6e7fc\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224825c760cccca6e7ff\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6226dcd0ef1aadc60586c\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d622b26464feb8e75e2046\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224225c760cccca6e7fc\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224825c760cccca6e7ff\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6226dcd0ef1aadc60586c\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d622b26464feb8e75e2046\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224225c760cccca6e7fc\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6224825c760cccca6e7ff\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d6226dcd0ef1aadc60586c\"},{\"title\":\"Nie czas umierać\",\"image\":\"https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg\",\"content\":\"Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.\",\"id\":\"61d622b26464feb8e75e2046\"}]";


        this.setState({
            movies: JSON.parse(testowy),
            isLoaded: true
        });
    }
*/
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
