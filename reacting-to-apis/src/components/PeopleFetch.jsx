function PeopleFetch(props) {
    fetch('https://ghibliapi.herokuapp.com/people')
            .then(response => response.json())
            .then((data) => {
                props.setState({
                    peopleArr: data,
                })
            })
            .catch(err => console.log(err));
}

export default PeopleFetch;