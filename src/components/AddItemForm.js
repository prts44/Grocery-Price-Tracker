import {useState, useEffect} from 'react';
import style from '../style/AddItemForm.module.css';

function AddItemForm(props) {

    const [name, setName] = useState(props.name);
    const [quantity, setQuantity] = useState(props.quantity);

    useEffect(() => {
        console.log(name + quantity);
    }, [name, quantity])

    return (
        <div className={style.container}>
            <p>Name</p>
            <input type="text" defaultValue={props.name ? props.name : ""} onChange={(e) => setName(e.target.value)}/>
            <p>Quantity</p>
            <input type="text" defaultValue={props.quantity ? props.quantity : ""} onChange={(e) => setQuantity(e.target.value)}/>
            <button onClick={() => {
                if (!name) {
                    alert("Please enter a valid name");
                } else if (quantity === "") {
                    alert("Please enter a valid quantity");
                } else {
                    console.log("valid");
                }
            }}>Submit</button>
        </div>
    )
}

export default AddItemForm;