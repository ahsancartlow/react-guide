import react from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoints.map((dataPt) => (
                <ChartBar
                key = {dataPt.label}
                value = {dataPt.value}
                maxValue = {null}
                label = {dataPt.label}
                />
            ))}      
        </div>
    );
}

export default Chart;