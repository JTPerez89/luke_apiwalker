import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PeopleDisplay = () => {
    const {inputID} = useParams();
    const [person, setPerson] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${inputID}`)
        .then(response => {
            setPerson(response.data);
            setError(false)})
        .catch(err => setError(true));
    }, [inputID])

    return (
        <div>
            {
            person&&
            <div>
                <h1>{person.name}</h1>
                <p>Height: {person.height} cm</p>
                <p>Weight: {person.mass} kg</p>
                <p>Eye color: {person.eye_color}</p>
                <p>Hair color: {person.hair_color}</p>
            </div>
            }
            {
                error&&
                <div>
                    <h1>These are not the droids you are looking for!</h1>
                    <img src="../assets/obi-wan.jpg" alt="Obi-wan" />
                </div>
            }
        </div>
    )
}

export default PeopleDisplay;