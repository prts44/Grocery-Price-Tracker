import {useState} from 'react';
import style from '../style/Card.module.css';
import logo from '../logo.svg';

function Card(props) {

    const [itemName, setItemName] = useState("Name");
    const [latestPrice, setLatestPrice] = useState(3);
    const [lastUpdate, setLastUpdate] = useState("2023-02-01");

    return (
        <div className={style.container} onClick={() => console.log("hey :)")}>
            <img src={logo} className={style.previewImage} alt={itemName}/>
            <div className={style.textInfo}>
                <h1 className={style.headingLarge}>{itemName}</h1>
                <h2 className={style.headingMedium}>Latest Price:</h2>
                <p className={style.textBasic}>${latestPrice}</p>
                <h2 className={style.headingMedium}>Last Update (yyyy-mm-dd):</h2>
                <p className={style.textBasic}>{lastUpdate}</p>
            </div>
        </div>
    );
}

export default Card;