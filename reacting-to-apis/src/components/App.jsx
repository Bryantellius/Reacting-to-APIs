import React, { Component } from 'react';
import Header from './Header';
import DisplayFilms from './DisplayFilms';
// import 'isometric-fetch';
// import 'es6-promise';

class App extends Component {

    state = {
        filmsArr: []
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    filmsArr: <DisplayFilms films={data}/>
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <hr></hr>
                <div className='row text-center'>{this.state.filmsArr}</div>
            </React.Fragment >
        );
    }
}

export default App;