import style from "../style/SearchBar.module.css";

function SearchBar(props) {

    return (
        <div>
            <input className={style.searchBar} type="text"></input>
        </div>
    );

}

export default SearchBar;