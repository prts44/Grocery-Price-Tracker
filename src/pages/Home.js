import {useState, useEffect, useRef, useMemo} from 'react';
import SearchBar from '../components/SearchBar.js';
import Card from '../components/Card.js';
import exampleData from '../exampleData.js';
import style from '../style/Home.module.css';

function Home(props) {
    const [useExampleData, setUseExampleData] = useState(false);
    const [data, setData] = useState(exampleData.items);
    const [query, setQuery] = useState("");
    const cards = useMemo(() => {
        console.log("Use memo ran");
        return generateCards(data);
    }, [data, query]);

    function getData() {
        fetch("http://localhost:4000/items")
        .then(response => response.json())
        .then(newData => {
            setData(newData);
            console.log("setData ran");
        })
        .catch((err) => {
            console.log(err);
            console.log("Could not fetch data. Using example data instead.");
            setUseExampleData(true);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    // creates clickable cards with basic info for each item
    function generateCards(items) {
        return items.map((item) => {
            if (item.item_name.toLowerCase().includes(query)) {
                //console.log(useExampleData);
                return <Card 
                        key={item.id} 
                        id={item.id} 
                        useExampleData={useExampleData} />;
            } else {
                return <></>;
            }
        });
    }

    return (
        <div className={style.container}>
            <div className={style.titleBox}>
                <h1 className={style.title}>Grocery Price Tracker</h1>
                <p>Click on a card to see more information.</p>
            </div>
            {useExampleData ? <p>You are viewing example data because the app could not connect to the server.</p> : <></>}
            <SearchBar callback={setQuery}/>
            <div className={style.cardContainer}>
                {cards}
            </div>
        </div>
    );
}

export default Home;