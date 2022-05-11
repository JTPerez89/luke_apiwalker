import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StarshipDisplay = () => {
    const [starship, setStarship] = useState();
    const {inputID} = useParams();
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${inputID}`)
        .then(response => {
            setStarship(response.data);
            setError(false)})
        .catch(err => setError(true));
    }, [inputID])

    return (
        <div>
            {
            starship&&
            <div>
                <h1>{starship.name}</h1>
                <p>Model: {starship.model}</p>
                <p>Crew size: {starship.crew}</p>
                <p>Cargo Capacity: {starship.cargo_capacity}</p>
                <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
            </div>
            }
            {
                error&&
                <div>
                    <h1>These are not the droids you are looking for!</h1>
                    <img src="/assets/obi-wan.jpg" alt="Obi-wan" />
                </div>
            }
        </div>
    )
}

export default StarshipDisplay;