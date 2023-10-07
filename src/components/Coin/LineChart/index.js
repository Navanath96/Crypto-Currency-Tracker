import  React from "react";
import {Line} from "react-chartjs-2";
import {Chart as chartjs} from "chart.js/auto";

function LineChart({chartData,priceType,multiAxis}){
    const option ={
        Plugins:{
            legend:{
                display:multiAxis ? true : false,
            },
        },
        responsive:true,
        interaction:{
            mode:"index",
            intersect:false,
        }, 
    };

    return <Line data={chartData} option={option}/>

}

export default LineChart;