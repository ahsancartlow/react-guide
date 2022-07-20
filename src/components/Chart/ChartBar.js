import './ChartBar.css';// my mistake, chartbar will include chartbar css then why i included chart css?

const ChartBar = (props) => {
    let barFillHeight = '0%';
    if(props.maxValue > 0){
        barFillHeight = Math.round( (props.value / props.maxValue) * 100 ) + '%';
    }    

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div 
                  className="chart-bar__fill" 
                  style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
    
}

export default ChartBar;