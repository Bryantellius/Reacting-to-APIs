import React, { Component } from 'react';

class DisplayFilms extends Component {
    newFilmsArr = this.props.films.map((film) => {
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

    render() {
        return this.newFilmsArr;
    }
}

export default DisplayFilms;