import {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../style/Card.module.css';
import logo from '../logo.svg';
import exampleData from '../exampleData.js';

function Card(props) {

    const [data, setData] = useState(exampleData);
    const [itemName, setItemName] = useState("Name");
    const [latestPrice, setLatestPrice] = useState(3);
    const [lastUpdate, setLastUpdate] = useState("2023-02-01");
    const [quantity, setQuantity] = useState("item");
    const prices = useRef([]);

    function getData() {
        if (props.useExampleData) {
            const item = data.items.find((item) => item.id === props.id)
            setItemName(item.name);
            setQuantity(item.pricePer);
            console.log(data);
            prices.current = data.prices.filter((price) => price.id === props.id);
            if (prices.current.length > 0){
                let latest = prices.current[0];
                for (let i = 1 ; i < prices.current.length ; i++) {
                    if (new Date(latest.date) < new Date(prices.current[i].date)) {
                        latest = prices.current[i];
                    }
                }
                setLatestPrice(latest.price);
                setLastUpdate(latest.date);
            } else {
                console.log(`Error: No prices found for ${itemName}`);
                setLatestPrice("N/A");
                setLastUpdate("N/A");
            }
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

    const navigate = useNavigate();
    function goToDetails() {
        navigate(`/items/${props.id}`);
    }

    return (
        <div className={style.container} onClick={() => goToDetails()}>
            <img src={logo} className={style.previewImage} alt={itemName}/>
            <div className={style.textInfo}>
                <h1 className={style.headingLarge}>{itemName}</h1>
                <h2 className={style.headingMedium}>Latest Price (per {quantity}):</h2>
                <p className={style.textBasic}>${latestPrice}</p>
                <h2 className={style.headingMedium}>Last Update (yyyy-mm-dd):</h2>
                <p className={style.textBasic}>{lastUpdate}</p>
            </div>
        </div>
    );
}

export default Card;