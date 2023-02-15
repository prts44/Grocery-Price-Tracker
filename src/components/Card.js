import {useState} from 'react';
import '../style/Card.css';
import logo from '../logo.svg';

function Card(props) {

    const [itemName, setItemName] = useState("Name");
    const [latestPrice, setLatestPrice] = useState(3);
    const [lastUpdate, setLastUpdate] = useState("2023-02-01");

    return (
        <div className="container" onClick={() => console.log("hey :)")}>
            <img src={logo} className="previewImage" alt={itemName}/>
            <div className="textInfo">
                <h1 className="headingLarge">{itemName}</h1>
                <h2 className="headingMedium">Latest Price:</h2>
                <p className="textBasic">${latestPrice}</p>
                <h2 className="headingMedium">Last Update (yyyy-mm-dd):</h2>
                <p className="textBasic">{lastUpdate}</p>
            </div>
        </div>
    )
}

export default Card;