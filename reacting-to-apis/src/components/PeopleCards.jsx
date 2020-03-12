import React from 'react';

function PeopleCards(props) {
    const newPeopleArr = props.arr.map((person) => {
        if (person === props.arr[0]) {
            return (
                <div key={person.id} className="tab-pane fade show active" id={`list-${person.id}`} role="tabpanel" aria-labelledby={`list-${person.name}-list`}>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{person.gender}</p>
                        <p className="card-text"><strong>Age: {person.age}</strong></p>
                        <a href={person.url} target='_blank'>{person.name}'s JSON</a>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={person.id} className="tab-pane fade" id={`list-${person.id}`} role="tabpanel" aria-labelledby={`list-${person.name}-list`}>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{person.gender}</p>
                        <p className="card-text"><strong>Age: {person.age}</strong></p>
                        <a href={person.url} target='_blank'>{person.name}'s JSON</a>
                    </div>
                </div>
            );
        }
    })

    return <div className="tab-content">{newPeopleArr}</div>;
}

export default PeopleCards;