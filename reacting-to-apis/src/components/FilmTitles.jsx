import React from 'react';

function FilmTitles(props) {
    const listGroup = props.arr.map((film) => {
        if(film === props.arr[0]){
            return (
                <a key={film.id} className="list-group-item list-group-item-action active" id={`list-${film.id}-list`} data-toggle="list" href={`#list-${film.id}`} role="tab" aria-controls={film.title}>{film.title}</a>
            );
        } else {
            return (
                <a key={film.id} className="list-group-item list-group-item-action" id={`list-${film.id}-list`} data-toggle="list" href={`#list-${film.id}`} role="tab" aria-controls={film.title}>{film.title}</a>
            );
        }
    });


    return (
        <div className="list-group" id="list-tab" role="tablist">{listGroup}</div>
    );

}

export default FilmTitles;