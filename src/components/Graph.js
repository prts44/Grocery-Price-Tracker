import {Chart} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-luxon';

function Graph(props) {
    // part of this code came from a tutorial/example
    // will be updated later
    const data = {
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Walmart',
              data: [{
                x: '2010-12-25',
                y: 3.99
              },
              {
                x: '2011-12-25',
                y: 4.99
              }],
              // you can set indiviual colors for each bar
              backgroundColor: 'rgba(1, 15, 255, 0.6)',
              borderColor: 'rgba(1, 15, 255, 0.6)',
              borderWidth: 1
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
            text: 'Chart.js Line Chart',
          },
        },
        scales: {
            x: {
                type: 'timeseries',
            }
        }
      };

    return (
        <Line options={options} data={data}/>
    );
}

export default Graph;