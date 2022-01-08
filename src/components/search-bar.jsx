import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {query: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let link = '/details/' + this.state.query;
        this.props.history.push(link);
        window.location.reload()
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{
                display: 'flex',
                flexDirection: 'row',
                width: '30%',
            }}>
                <input class="form-control" type="text" placeholder="Podaj ID" value={this.state.query} onChange={this.handleChange} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Przejdź</button>
            </form>
        );
    }
}
export default withRouter(SearchBar);