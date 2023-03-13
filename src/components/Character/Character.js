/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './Character.css';
import arrowBack from '../../images/arrow_back.png';

const Character = () => {
    const location = useLocation();
    const [character, setCharacter] = useState(location.state);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        if (!character) {
            setIsLoading(true);
            const fetchData = async () => {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`);

                setCharacter(data);
                setIsLoading(false);
            }

            fetchData();
        }
    }, []);

    return (
        <>
            { isLoading ? <Loader /> : null }
            { character &&
                <div className="character">
                    <Link className="character__back" to={'/'}>
                        <img className="character__arrow-back" src={arrowBack} alt="arrow back" />
                        Go Back
                    </Link>

                    <div className="character__container">
                        <img className="character__image" src={character.image} alt={character.name} />
                        <h2 className="character__name">{character.name}</h2>

                        <h3 className="character__title">Informations</h3>

                        <div className="character__info">
                            <div className="character__row">
                                <p className="character__property">Gender</p>
                                <p className="character__description">{character.gender}</p>
                            </div>

                            <div className="character__row">
                                <p className="character__property">Status</p>
                                <p className="character__description">{character.status}</p>
                            </div>

                            <div className="character__row">
                                <p className="character__property">Specie</p>
                                <p className="character__description">{character.species}</p>
                            </div>

                            <div className="character__row">
                                <p className="character__property">Origin</p>
                                <p className="character__description">{character.origin.name}</p>
                            </div>

                            <div className="character__row">
                                <p className="character__property">Type</p>
                                <p className="character__description">{character.type || 'Unknown'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>)
}

export default Character;