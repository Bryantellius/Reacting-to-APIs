import React, { Component } from 'react';
import Header from './Header';
import FilmFetch from './FilmFetch';
import PeopleFetch from './PeopleFetch';
import ListGroup from './ListGroup';
import ListGroupPeople from './ListGroupPeople';
// import 'isometric-fetch';
// import 'es6-promise';

class App extends Component {

    state = {
        filmsArr: [],
        peopleArr: [],
        showFilms: false,
        showPeople: false
    }

    handleFilmClick = () => {
        this.setState({
            showFilms: true,
            showPeople: false
        })
    }

    handlePeopleClick = () => {
        this.setState({
            showFilms: false,
            showPeople: true
        })
    }

    componentDidMount() {
        FilmFetch(this);
        PeopleFetch(this);
    }

    render() {
        if (this.state.showFilms) {
            return (
                <div>
                    <Header handleFilmClick={this.handleFilmClick} handlePeopleClick={this.handlePeopleClick} />
                    <ListGroup arr={this.state.filmsArr} />
                </div>
            );
        } else if (this.state.showPeople) {
            return (
                <div>
                    <Header handleFilmClick={this.handleFilmClick} handlePeopleClick={this.handlePeopleClick} />
                    <ListGroupPeople arr={this.state.peopleArr} />
                </div>
            );
        } else {
            return <Header handleFilmClick={this.handleFilmClick} handlePeopleClick={this.handlePeopleClick} />;
        }
    }
}

export default App;