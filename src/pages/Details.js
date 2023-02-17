import {useState, useEffect, useMemo} from 'react';
import style from "../style/Details.module.css";
import logo from '../logo.svg';

function Details(props) {

    const [id, setId] = useState(props.id);

    return (
        <div className={style.container}>
            <div className={style.visuals}>
                <div className={style.imageWrapper}>
                    <img src={logo} alt={"alt"} className={style.previewImage}/>
                </div>
                <div className={style.chart}>
                    <h1>Chart here</h1>
                </div>
            </div>
            <div className={style.textInfo}>
                <h1>Item Name</h1>
                <h2>Latest Price (at selected store)</h2>
                <p>$1</p>
                <h2>Last Updated</h2>
                <p>7-27-2020</p>
            </div>  
        </div>
    );

}

export default Details;