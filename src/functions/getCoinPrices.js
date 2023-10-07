import axios from "axios";


export const getCoinPrices=(id, Days)=>{
    const price=axios.
    get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${Days}&interval=daily`)
        .then((response)=>{
          return response.data.prices;
        })
        .catch((error)=>{
         console.log(error);
        })
        return price;
}