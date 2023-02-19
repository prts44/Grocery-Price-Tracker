import {Chart} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import style from '../style/Graph.module.css';
import 'chartjs-adapter-luxon';

function Graph(props) {
    const data = {
        datasets: [
            {
                label: 'Walmart',
                data: [{
                    x: '2010-12-25',
                    y: 3.99
                },
                {
                    x: '2011-01-02',
                    y: 4.99
                },
                {
                    x: '2011-01-16',
                    y: 5.99
                },
                {
                    x: '2012-11-29',
                    y: 6.99
                },
                ],
                backgroundColor: 'rgb(1, 15, 255)',
                borderColor: 'rgb(1, 15, 255)',
                borderWidth: 3,
                pointRadius: 7,
                pointHoverRadius: 10
            },
            {
                label: 'Loblaws',
                data: [{
                    x: '2010-09-25',
                    y: 2.99
                },
                {
                    x: '2011-04-22',
                    y: 5.99
                },
                {
                    x: '2012-06-19',
                    y: 8.99
                }
                ],
                backgroundColor: 'rgb(180, 180, 5)',
                borderColor: 'rgb(180, 180, 5)',
                borderWidth: 3,
                pointRadius: 7,
                pointHoverRadius: 10
            }
        ]
    }

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