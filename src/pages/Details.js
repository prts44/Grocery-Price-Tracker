import {useState, useEffect, useRef} from 'react';
import Popup from 'reactjs-popup';
import { useParams } from "react-router-dom";
import style from "../style/Details.module.css";
import logo from '../logo.svg';
import exampleData from '../exampleData.js';
import Graph from '../components/Graph.js';
import AddItemForm from '../components/AddItemForm.js';

function Details(props) {

    const params = useParams();
    const [prices, setPrices] = useState([]);
    const selectedStore = useRef("Walmart");
    const [data, setData] = useState(exampleData);
    const [quantity, setQuantity] = useState("item")
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
        setQuantity(item.quantity)
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
            <div className={style.itemName}>
                <h1>{itemName + " (per " + quantity + ")"}</h1>
            </div>
            <div className={style.basicInfo}>
                <div className={style.imageContainer}>
                    <img src={logo} alt={"alt"} className={style.previewImage}/>
                </div>
                <div className={style.textInfo}>
                    <h2>Latest Price (at selected store)</h2>
                    <p>${priceView}</p>
                    <h2>Last Updated (yyyy-mm-dd)</h2>
                    <p>{lastUpdateView}</p>
                </div>  
            </div>
            <div>
                <Popup trigger={<button>Edit Item</button>} modal>
                    <AddItemForm id={params.id} name={itemName} quantity={quantity}/>
                </Popup>
                <button>Add price</button>
                <button>Delete item</button>
            </div>
            <div className={style.chart}>
                {prices.length > 0 ? <Graph stores={stores} prices={prices} id={params.id}/> : <h1>No prices found!</h1>}
            </div>
            <a className={style.back} href="/">Back</a>
        </div>
    );
}

export default Details;