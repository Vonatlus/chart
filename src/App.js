import './App.css';
import { Line, Bar, Radar, Doughnut, Pie, PolarArea } from 'react-chartjs-2';
import { Chart as Chartjs } from 'chart.js/auto';
import { useState } from 'react';

const defaultLabels = ['January', 'February', 'March', 'April', 'May'];
const defaultValues = [1, 5, 10, 1, 2];

function App() {
  const [chartType, setChartType] = useState('Bar');

  const [label, setLabel] = useState(defaultLabels);
  const [labels, setLabels] = useState(defaultLabels);

  const [value, setValue] = useState(defaultValues);
  const [values, setValues] = useState(defaultValues);

  const getChartByType = (type) => {
    switch (type) {
      case 'Bar':
        return Bar;
      case 'Line':
        return Line;
      case 'Radar':
        return Radar;
      case 'Doughnut':
        return Doughnut;
      case 'Pie':
        return Pie;
      case 'PolarArea':
        return PolarArea;
      default:
        return Bar;
    }
  }

  const Chart = getChartByType(chartType);

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

      <Chart
        data={{
          labels,
          datasets: [{
            label: 'Date',
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }} />

      <div className="chartType">
        <label>
          <input
            className="chartType__item"
            type="radio"
            name="chartType"
            value="Bar"
            onClick={(e) => setChartType(e.target.value)}
            checked={chartType === "Bar"}
          />
          Bar Chart
        </label>

        <label>
          <input
            className="chartType__item"
            type="radio"
            name="chartType"
            value="Line"
            onClick={(e) => setChartType(e.target.value)}
          />
          Line Chart
        </label>

        <label>
          <input
            className="chartType__item"
            type="radio"
            name="chartType"
            value="Radar"
            onClick={(e) => setChartType(e.target.value)}
          />
          Radar Chart
        </label>

        <label>
          <input
            className="chartType__item"
            type="radio"
            name="chartType"
            value="Doughnut"
            onClick={(e) => setChartType(e.target.value)}
          />
          Doughnut Chart
        </label>

        <label>
          <input
            className="chartType__item"
            type="radio"
            name="chartType"
            value="Pie"
            onClick={(e) => setChartType(e.target.value)}
          />
          Pie Chart
        </label>

        <label>
          <input
            className="chartType__item"
            type="radio"
            name="chartType"
            value="PolarArea"
            onClick={(e) => setChartType(e.target.value)}
          />
          PolarArea Chart
        </label>
      </div>
    </div>
  );
}

export default App;
