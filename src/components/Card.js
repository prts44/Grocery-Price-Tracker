import {useState, useEffect} from 'react';
import style from '../style/Card.module.css';
import logo from '../logo.svg';
import exampleData from '../exampleData.js';

function Card(props) {

    const [data, setData] = useState(exampleData);
    const [itemName, setItemName] = useState("Name");
    const [latestPrice, setLatestPrice] = useState(3);
    const [lastUpdate, setLastUpdate] = useState("2023-02-01");

    function getData() {
        if (props.useExampleData) {
            setItemName(data.items.find((item) => item.id === props.id).name);
            console.log(new Date("2023-03-01") > new Date("2023-02-01"));
        } else {
            fetch(`api route/${props.id}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(() => {
                console.log("Could not fetch data. Using example data instead.");
            });
        }
    }

    useEffect(() => {
        getData();
    }, []);

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