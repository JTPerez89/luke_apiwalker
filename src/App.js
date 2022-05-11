import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import PeopleDisplay from './components/PeopleDisplay';
import PlanetDisplay from './components/PlanetDisplay';
import SearchForm from './components/SearchForm';
import StarshipDisplay from './components/StarshipDisplay';

function App() {

    return (
        <BrowserRouter>
            <SearchForm />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/people/:inputID' element={<PeopleDisplay />} />
                <Route path='/planet/:inputID' element={<PlanetDisplay />} />
                <Route path='/starships/:inputID' element={<StarshipDisplay />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
