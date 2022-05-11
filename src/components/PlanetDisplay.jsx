import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PlanetDisplay = () => {
    const [planet, setPlanet] = useState();
    const {inputID} = useParams();
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${inputID}`)
        .then(response => {
            setPlanet(response.data);
            setError(false)})
        .catch(err => setError(true));
    }, [inputID])

    return (
        <div>
            {
            planet&&
            <div>
                <h1>{planet.name}</h1>
                <p>Diameter: {planet.diameter} km</p>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Population: {planet.population}</p>
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

export default PlanetDisplay;