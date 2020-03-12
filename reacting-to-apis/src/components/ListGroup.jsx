import React from 'react';
import FilmTitles from './FilmTitles';
import FilmCards from './FilmCards';

function ListGroup(props){
        return (
            <div className="row" id='filmsListGroup'>
                <div className="col-4" id='filmsTitles'>
                    <FilmTitles arr={props.arr} />
                </div>
                <div className="col-8" id='filmsCards'>
                    <FilmCards arr={props.arr} />
                </div>
            </div>
        );
    
}

export default ListGroup;