import {useState, useEffect} from 'react';
import style from "../style/Details.module.css";

function Details(props) {

    const [id, setId] = useState(props.id);

    return (
        <div className={style.container}>
            <div className={style.visuals}>
                <img alt={"alt"}/>
            </div>
            <div className={style.textInfo}>

            </div>  
        </div>
    );

}

export default Details;