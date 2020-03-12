import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className='jumbotron bg-light shadow text-center'>
                <img src='logo.png' alt='Studio Ghibli Logo'></img>

                <hr></hr>

                <div>
                    <button className='btn btn-primary shadow mx-2' onClick={this.props.handleFilmClick}>Films</button>
                    <button className='btn btn-primary shadow mx-2' onClick={this.props.handlePeopleClick}>People</button>
                </div>
            </div>
        )
    }
}

export default Header;