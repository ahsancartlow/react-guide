import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPnt => dataPnt.value);
    const maxintegerValue = Math.max(...dataPointValues); 

    return (
        <div className="chart">
            {props.dataPoints.map((dataPt) => (
                <ChartBar
                key = {dataPt.label}
                value = {dataPt.value}
                maxValue = {maxintegerValue}
                label = {dataPt.label}
                />
            ))}      
        </div>
    );
}

export default Chart;