import {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../style/Card.module.css';
import logo from '../logo.svg';
import exampleData from '../exampleData.js';

function Card(props) {

    const [data, setData] = useState(exampleData.items);
    const [latestPrice, setLatestPrice] = useState("Loading...");
    const [lastUpdate, setLastUpdate] = useState("Loading...");
    const prices = useRef(exampleData.prices.filter((price) => props.id == price.id));

    const item = data.find((item) => item.id === props.id) ?? {
        item_name: "Name",
        quantity: "item",
        id: 1
    };

    function getData() {
        fetch(`http://localhost:4000/items/${props.id}`)
        .then(response => response.json())
        .then(newData => {
            setData(newData);
            fetch(`http://localhost:4000/prices/${props.id}`)
            .then(response => response.json())
            .then(newPrices => {
                prices.current = newPrices;
                getLatestUpdate();
            })
            .catch((err) => {
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
            console.log("Could not fetch data. Using example data instead.");
            getLatestUpdate();
        });
    };

    function getLatestUpdate() {
        if (prices.current.length > 0) {
            console.log("tjiseo0gtjeisss3t6hjw3ork");
            let latest = prices.current[0];
            for (let i = 1 ; i < prices.current.length ; i++) {
                if (latest.update_date < prices.current[i].update_date) {
                    latest = prices.current[i];
                }
            }
            console.log(latest);
            setLatestPrice(latest.price);
            setLastUpdate(latest.update_date.toDateString());
        } else {
            console.log(`Something went wrong`);
            setLatestPrice("N/A");
            setLastUpdate("N/A");
        }
        console.log(prices.current);
    }

    useEffect(() => {
        getData();
    }, []);

    function updateDisplay() {
        try {
            /*prices.current = data.prices.filter((price) => price.id === props.id);
            if (prices.current.length > 0) {
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
            }*/
        } catch (err) {
            console.log("Something went wrong.");
        }
    }

    const navigate = useNavigate();

    function goToDetails() {
        navigate(`/items/${props.id}`);
    }

    return (
        <div className={style.container} onClick={() => goToDetails()}>
            <img src={logo} className={style.previewImage} alt={props.name}/>
            <div className={style.textInfo}>
                <h1 className={style.headingLarge}>{item.item_name}</h1>
                <h2 className={style.headingMedium}>Latest Price (per {item.quantity}):</h2>
                <p className={style.textBasic}>${latestPrice}</p>
                <h2 className={style.headingMedium}>Last Updated (yyyy-mm-dd):</h2>
                <p className={style.textBasic}>{lastUpdate}</p>
            </div>
        </div>
    );
}

export default Card;