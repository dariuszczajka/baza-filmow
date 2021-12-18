import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from "./movie";

class Content extends Component {

    render(){
        const contentStyle={
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "2%",
        }
        return(
            <div className="Content">
                <table className="table">
                    <tr style={contentStyle}>
                        <Movie title={"Dr. house"} year={"2001"} director={"Tomek"} popularity={"33"}/>
                        <Movie title={"Gladiator"} year={"2012"} director={"Andrzej"} popularity={"2"}/>
                        <Movie title={"Matrix"} year={"1999"} director={"Lukasz"} popularity={"112"}/>
                        <Movie title={"Rodzina Soprano"} year={"1998"} director={"Krzysiek"} popularity={"555"}/>
                        <Movie title={"Slepnac od świateł"} year={"2010"} director={"Darek"} popularity={"222"}/>
                    </tr>
                    <tr style={contentStyle}>
                        <Movie title={"Ojciec chrzestny"} year={"1995"} director={"Dawid"} popularity={"6112"}/>
                        <Movie title={"Dzień świra"} year={"2004"} director={"Kuba"} popularity={"251"}/>
                        <Movie title={"Człowiek z blizną"} year={"1989"} director={"Sławek"} popularity={"21"}/>
                        <Movie title={"Moda na sukces"} year={"2002"} director={"Cezary"} popularity={"78"}/>
                        <Movie title={"Daleko od noszy"} year={"2007"} director={"Dominik"} popularity={"21"}/>
                    </tr>
                </table>
            </div>
        )
    }

}
export default Content;
