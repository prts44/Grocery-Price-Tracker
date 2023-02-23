import {useState, useEffect, useRef} from 'react';
import { useParams } from "react-router-dom";
import style from "../style/Details.module.css";
import logo from '../logo.svg';
import exampleData from '../exampleData.js';
import Graph from '../components/Graph.js';

function Details(props) {

    const params = useParams();
    const [prices, setPrices] = useState([]);
    const selectedStore = useRef("Walmart");
    const [data, setData] = useState(exampleData);
    const [stores, setStores] = useState(exampleData.stores);
    const [itemName, setItemName] = useState("Name");
    const [priceView, setPriceView] = useState(4);
    const [lastUpdateView, setLastUpdateView] = useState("2021-10-09");

    function getData() {
        fetch("api route")
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => updateDisplay())
        .catch(() => {
            console.log("Could not fetch data. Using example data instead.");
            updateDisplay();
        });
    }

    function updateDisplay() {
        let item = data.items.find((item) => item.id == params.id);
        setItemName(item.name);
        setPrices(data.prices.filter((price) => price.id == params.id));
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (prices.length > 0){
            let latest = prices[0];
            for (let i = 1 ; i < prices.length ; i++) {
                if (new Date(latest.date) < new Date(prices[i].date)) {
                    latest = prices[i];
                }
            }
            setPriceView(latest.price);
            setLastUpdateView(latest.date);
        } else {
            console.log(`Error: No prices found for ${itemName}`);
            setPriceView("N/A");
            setLastUpdateView("N/A");
        }
    }, [prices]);

    return (
        <div className={style.container}>
            <div className={style.basicInfo}>
                <div className={style.imageContainer}>
                    <img src={logo} alt={"alt"} className={style.previewImage}/>
                </div>
                <div className={style.textInfo}>
                    <h1>{itemName}</h1>
                    <h2>Latest Price (at selected store)</h2>
                    <p>${priceView}</p>
                    <h2>Last Updated</h2>
                    <p>{lastUpdateView}</p>
                </div>  
            </div>
            <div className={style.chart}>
                {prices.length > 0 ? <Graph stores={stores} prices={prices} id={params.id}/> : <h1>No prices found!</h1>}
            </div>
        </div>
    );
}

export default Details;