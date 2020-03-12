function FilmFetch(props) {
    fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then((data) => {
                props.setState({
                    filmsArr: data,
                })
            })
            .catch(err => console.log(err));
}

export default FilmFetch;