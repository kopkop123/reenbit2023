/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from '../components/Character/CharacterList';
import Loader from '../components/Loader/Loader';
import Logo from '../components/Logo/Logo';
import Search from '../components/Search/Search';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character');
        data.results.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }

            return 1;
        });

        setCharacters(data.results);
        setFilteredCharacters(data.results);
        setIsLoading(false);

        localStorage.setItem("characters", JSON.stringify(data.results));
    }

    const searchCharacter = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredResult = characters.filter((character) => character.name.toLowerCase().includes(searchValue));

        localStorage.setItem("searchValue", JSON.stringify(searchValue));
        setFilteredCharacters(filteredResult);
    }

    const restoreAfterReload = () => {
        if (localStorage.getItem("searchValue") !== null) {
            const filteredResult = characters.filter((character) => character.name.toLowerCase().includes(JSON.parse(localStorage.getItem("searchValue"))));
            setFilteredCharacters(filteredResult);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("characters") === null) {
            fetchData();
        } else {
            const localStorageCharacters = JSON.parse(localStorage.getItem("characters"));

            setCharacters(localStorageCharacters);
            setFilteredCharacters(localStorageCharacters);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("searchValue") !== null) {
            restoreAfterReload();
        }
    }, [characters])

    return (
        <div className="wrapper">
            { isLoading ? <Loader /> : null }
            <Logo />
            <Search searchCharacter={searchCharacter} />
            <CharacterList characters={filteredCharacters} />
        </div>
    )
}

export default Home;
