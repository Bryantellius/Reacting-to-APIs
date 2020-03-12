import React from 'react';
import PeopleTitles from './PeopleTitles';
import PeopleCards from './PeopleCards';

function ListGroupPeople(props){
        return (
            <div className="row" id='peopleListGroup'>
                <div className="col-4" id='peopleNames'>
                    <PeopleTitles arr={props.arr} />
                </div>
                <div className="col-8" id='peopleCards'>
                    <PeopleCards arr={props.arr} />
                </div>
            </div>
        );
    
}

export default ListGroupPeople;