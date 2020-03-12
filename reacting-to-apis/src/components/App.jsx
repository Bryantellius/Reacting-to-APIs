import React, { Component } from 'react';
import Header from './Header';
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
                    filmsArr: data.map((film) => {
                        return (
                            <div className="card col-md-3" key={film.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{film.title}</h5>
                                    <p className="card-text">{film.description}</p>
                                    <p className="card-text"><strong>{film.release_date}</strong></p>
                                </div>
                            </div>
                        );
                    })
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