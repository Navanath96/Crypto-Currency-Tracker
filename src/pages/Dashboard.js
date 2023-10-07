import React,{useState,useEffect} from "react"
import Header from "../components/common/Header";   
import Tabscomponent from "../components/Dashboard/Tabscomponent";
import axios from "axios";
import Search from "../components/Dashboard/Search"
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/common/Loader";
import BackToTop from "../components/common/BackToTop";

function Dashboardpage(){
    const [coins, setcoins]= useState([]);
    const [paginatedcoins, setPaginatedcoins]= useState([]);
    const[search, setSearch]=useState("")
    const [page, setPage] = useState(1);
    const [isLoading , setIsLoading]=useState(true);


    const handlePageChange = (event, value) => {
      setPage(value);
      var previosIndex=(value-1)*10;
      setPaginatedcoins(coins.slice(previosIndex,previosIndex+10));
    };

    const onSearchChange=(e)=>{
        console.log(e.target.value)
        setSearch(e.target.value);
    }

    var filteredCoins =coins.filter((item)=>item.name.toLowerCase().includes(search)||
    item.symbol.toLowerCase().includes(search)
    )

    useEffect(()=>{
     axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en")
     .then((response)=>{
      setcoins(response.data);
      setIsLoading(false);
      setPaginatedcoins(response.data.slice(0,10));
     })
     .catch((error)=>{
      console.log(error);
      setIsLoading(false);
     })
    },[]);
  
    
    return(
        <>
        <Header/>
        <BackToTop/>
       {  isLoading? (<Loader/>):( <div>
           <Search search={search} onSearchChange={onSearchChange}/>
            <Tabscomponent coins={search? filteredCoins :paginatedcoins}/>
            {!search &&
            <PaginationComponent page={page} handleChange={handlePageChange}/>
            }
        </div>
        )}
        </>
    )
}
export default Dashboardpage;