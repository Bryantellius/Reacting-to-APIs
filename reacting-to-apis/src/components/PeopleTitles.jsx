import React from 'react';

function PeopleTitles(props) {
    const listGroup = props.arr.map((person) => {
        if(person === props.arr[0]){
            return (
                <a key={person.id} className="list-group-item list-group-item-action active" id={`list-${person.id}-list`} data-toggle="list" href={`#list-${person.id}`} role="tab" aria-controls={person.name}>{person.name}</a>
            );
        } else {
            return (
                <a key={person.id} className="list-group-item list-group-item-action" id={`list-${person.id}-list`} data-toggle="list" href={`#list-${person.id}`} role="tab" aria-controls={person.name}>{person.name}</a>
            );
        }
    });


    return (
        <div className="list-group" id="list-tab" role="tablist">{listGroup}</div>
    );

}

export default PeopleTitles;