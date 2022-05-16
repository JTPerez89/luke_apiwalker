import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const [selector, setSelector] = useState();
    const [id, setId] = useState();

    const navagate = useNavigate();

    const submitIntake = () => {
        navagate(`/${selector}/${id}`);
    }

    return (
        <div>
            <form onSubmit={submitIntake}>
                <label htmlFor="selector">Search for:</label>
                <select onChange={(e) => setSelector(e.target.value)}>
                    <option hidden>Select Search Parameters</option>
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                    <option value="starships">Starships</option>
                </select>
                <label htmlFor="id">ID:</label>
                <input type="number" onChange={(e) => setId(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;