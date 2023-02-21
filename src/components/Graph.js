import {Chart} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import style from '../style/Graph.module.css';
import {useEffect, useState} from 'react';
import 'chartjs-adapter-luxon';

function Graph(props) {

    const DEFAULT_LINE_SIZE = 3; // called borderWidth in chartjs
    const DEFAULT_POINT_RADIUS = 7;
    const DEFAULT_POINT_RADIUS_HOVER = 10;

    const [data, setData] = useState({
        datasets: [
            {
                label: 'default',
                data: [],
                backgroundColor: 'rgb(180, 2, 5)',
                borderColor: 'rgb(180, 2, 5)',
                borderWidth: DEFAULT_LINE_SIZE,
                pointRadius: DEFAULT_POINT_RADIUS,
                pointHoverRadius: DEFAULT_POINT_RADIUS_HOVER
            }
        ]
    });

    useEffect(() => {
        let newData = {
            datasets: props.stores.map((store) => {
                return {
                    label: store.name,
                    data: props.prices.filter((price) => price.store == store.name)
                        .map((price) => {
                            return {
                                x: price.date,
                                y: price.price
                            }
                    }),
                    backgroundColor: store.colour,
                    borderColor: store.colour,
                    borderWidth: DEFAULT_LINE_SIZE,
                    pointRadius: DEFAULT_POINT_RADIUS,
                    pointHoverRadius: DEFAULT_POINT_RADIUS_HOVER
                }
            })
        };
        setData(newData);
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Price history for ${"thing"}`,
            },
        },
        scales: {
            x: {
                type: 'time',
            }
        },
    };

    return (
        <div className={style.graph}>
            <Line options={options} data={data}/>
        </div>
    );
}

export default Graph;