import searchIcon from '../../images/search.png';
import './Search.css';

const Search = (props) => {

    return (
        <div className="search">
            <img src={searchIcon} alt="search icon" className="search__icon" />
            <input type="text" placeholder="Filter by name..." defaultValue={JSON.parse(localStorage.getItem("searchValue"))} className="search__input" onChange={props.searchCharacter} />
        </div>
    )
}

export default Search;
