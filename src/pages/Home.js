import {useState, useEffect, useRef} from 'react';
import SearchBar from '../components/SearchBar.js';
import Card from '../components/Card.js';
import Details from '../pages/Details.js';
import Graph from '../components/Graph.js';
import exampleData from '../exampleData.js';
import style from '../style/Home.module.css';

function Home(props) {
    let useExampleData = useRef(false);
    let [cards, setCards] = useState([]);
    const [data, setData] = useState(exampleData);
    const [query, setQuery] = useState("");

    function getData() {
        fetch("api route")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(() => {
            console.log("Could not fetch data. Using example data instead.");
            useExampleData.current = true;
            console.log(data.items);
            generateCards(data.items);
        });
    }

    // creates clickable cards with basic info for each item
    function generateCards(items) {
        setCards(items.map((item) => {
            if (item.name.toLowerCase().includes(query)) {
                return <Card id={item.id} useExampleData={useExampleData} />;
            } else {
                return <></>;
            }
        }));
        console.log(cards);
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        generateCards(data.items);
    }, [query]);

    return (
        <div className={style.container}>
            <div className={style.titleBox}>
                <h1 className={style.title}>Grocery Price Tracker</h1>
                <p>Click on a card to see more information.</p>
            </div>
            <SearchBar callback={setQuery}/>
            <div className={style.cardContainer}>
                {cards}
            </div>
        </div>
    );
}

export default Home;