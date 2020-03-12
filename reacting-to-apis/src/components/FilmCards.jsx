import React from 'react';

function FilmCards(props) {
    const newFilmsArr = props.arr.map((film) => {
        if (film === props.arr[0]) {
            return (
                <div key={film.id} className="tab-pane fade show active" id={`list-${film.id}`} role="tabpanel" aria-labelledby={`list-${film.title}-list`}>
                    <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <p className="card-text">{film.description}</p>
                        <p className="card-text"><strong>{film.release_date}</strong></p>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={film.id} className="tab-pane fade" id={`list-${film.id}`} role="tabpanel" aria-labelledby={`list-${film.title}-list`}>
                    <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <p className="card-text">{film.description}</p>
                        <p className="card-text"><strong>{film.release_date}</strong></p>
                    </div>
                </div>
            );
        }
    })

    return <div className="tab-content">{newFilmsArr}</div>;
}

export default FilmCards;