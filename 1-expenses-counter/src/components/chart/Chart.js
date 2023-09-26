import './Chart.css';
import ChartBar from '../chartBar/ChartBar';

export default function Chart({ charts }) {
  const maximumValue = Math.max(...charts.map((chart) => chart.value));
  return (
    <div className='chart'>
      {charts.map((chart) => (
        <ChartBar
          key={chart.label}
          value={chart.value}
          max={maximumValue}
          label={chart.label}
        />
      ))}
    </div>
  );
}
