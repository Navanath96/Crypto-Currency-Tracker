import React, { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List/index"
import CoinInfo from "../components/Coin/CoinInfo/insex";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";

function CoinPage(){
    const {id} =useParams();
    const [IsLoading, setIsLoading]=useState(true);
    const [coinData,setcoinData]=useState();
    const [Days,setDays]=useState(30);
    const [chartData,setChartData]=useState();
    

    useEffect(()=>{
        if(id){
           getData();
        }
       
    },[id])

    async function getData(){
        const coinData= await getCoinData(id);
        if(coinData){
            coinObject(setcoinData,coinData)
            const prices=await getCoinPrices(id,Days);
            if(prices.length>0){
                // console.log("whooo")
                setChartData({
                    
                        labels: prices.map((price)=> convertDate(price[0])),
                        datasets: [
                          {
                            data:prices.map((price)=>price[1]) ,
                            borderColor: "#3a80e9",
                            borderWidth:2,
                            fill:true,
                            tension:0.25,
                            backgroundColor:"rgba(58,128,233,0.1)",
                            pointRadius:0,
                          },
                        ]
                      
                });
                setIsLoading(false);
            }
        }
       
    }

    return(
        <div>
        <Header/>
        {IsLoading? <Loader/>: 
        <>
        <div className="grey-wrapper">
            <List coin={coinData}/>
            </div>
            <div className="grey-wrapper">
                <LineChart chartData={chartData}/>
            </div>
            <CoinInfo heading={coinData.name} desc={coinData.desc}/>
            </>
            }
        </div>
    ) 
}

export default CoinPage;