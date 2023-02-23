import style from "../style/SearchBar.module.css";

function SearchBar(props) {

    return (
        <div className={style.container}>
            <input className={style.searchBar} type="text" onChange={(e) => {
                props.callback(e.target.value.toLowerCase());
                console.log(e.target.value.toLowerCase());
            }}></input>
        </div>
    );

}

export default SearchBar;