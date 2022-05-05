import './App.css';
import { Line, Bar, Radar, Doughnut, Pie, PolarArea } from 'react-chartjs-2';
import { Chart as Chartjs } from 'chart.js/auto';
import { useState } from 'react';
import { barData, lineData, radarData, DoughnutAndPieData, polarAreaData } from './dataStyle';

const defaultLabels = ['January', 'February', 'March', 'April', 'May'];
const defaultValues = [1, 5, 10, 1, 2];
const typesOfChart = ['Bar', 'Line', 'Radar', 'Doughnut', 'Pie', 'PolarArea'];

const getChartByType = (type) => {
  switch (type) {
    case 'Bar':
      return [Bar, barData];

    case 'Line':
      return [Line, lineData];

    case 'Radar':
      return [Radar, radarData];

    case 'Doughnut':
      return [Doughnut, DoughnutAndPieData];

    case 'Pie':
      return [Pie, DoughnutAndPieData];

    case 'PolarArea':
      return [PolarArea, polarAreaData];

    default:
      break;
  }
}

function App() {
  const [chartType, setChartType] = useState('Bar');

  const [label, setLabel] = useState(defaultLabels);
  const [labels, setLabels] = useState(defaultLabels);

  const [value, setValue] = useState(defaultValues);
  const [values, setValues] = useState(defaultValues);

  const Chart = getChartByType(chartType)[0];
  const data = getChartByType(chartType)[1];

  data.labels = labels;
  data.datasets[0].data = values
  data.datasets[0].label = 'Month';

  return (
    <div className="App">
      <div className="chartAxis">
        <label for="X_axis">
          X axis labels:
        </label>

        <input
          type="text"
          id="X_axis"
          className="chartAxis__item"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setLabels(label.split(','))}
          onBlur={() => setLabels(label.split(','))}
        />

        <label for="Y_axis">
          Y axis values:
        </label>

        <input
          type="text"
          id="Y_axis"
          className="chartAxis__item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setValues(value.split(','))}
          onBlur={() => setValues(value.split(','))}
        />
      </div>

      <div>
        <Chart
          height={400}
          data={data}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>

      <div className="chartType">
        {typesOfChart.map((type) => (
          <label>
            <input
              className="chartType__item"
              type="radio"
              name="chartType"
              value={type}
              onClick={(e) => setChartType(e.target.value)}
              checked={chartType === type}
            />
            {`${type} Chart`}
          </label>
        ))}
      </div>
    </div>
  );
}

export default App;
