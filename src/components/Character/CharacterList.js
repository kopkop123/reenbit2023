import { Link } from 'react-router-dom';
import './CharacterList.css';

const CharacterList = ({ characters }) => {
    return (
        <>
            { characters.length ?
                <section className="character-list">
                    {
                        characters.map((character) => (
                            <Link
                                key={character.id}
                                className="character-list__card"
                                state={character}
                                to={{pathname: `/character/${character.id}`}}
                            >
                                <img src={character.image} alt={character.name} className="character-list__image" />
                                <div className="character-list__card-info">
                                    <h3 className="character-list__name">{character.name}</h3>
                                    <p className="character-list__species">{character.species}</p>
                                </div>
                            </Link>
                        ))
                    }
                </section> :
                <h2 className="character-list__empty">Nothing Found</h2>
            }
        </>)
}

export default CharacterList;
