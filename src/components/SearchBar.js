import style from "../style/SearchBar.module.css";
import {useState} from 'react';

function SearchBar(props) {

    const [search, setSearch] = useState("");

    return (
        <div>
            <input className={style.searchBar} type="text" onChange={(e) => {
                props.callback(e.target.value.toLowerCase());
                console.log(e.target.value.toLowerCase());
            }}></input>
        </div>
    );

}

export default SearchBar;