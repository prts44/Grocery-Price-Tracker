import {useState, useEffect} from 'react';

function Manage(props) {

    useEffect(() => {
        fetch("http://localhost:4000/stores")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(() => {
            console.log("Could not fetch data. Using example data instead.");
        });
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                </tr>
            </table>    
        </div>
    )
}

export default Manage;