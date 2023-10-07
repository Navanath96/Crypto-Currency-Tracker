import React, { useState } from "react";
import "./style.css";

function CoinInfo({heading,desc}){
    const shortdesc=desc.slice(0,200) +"<p style='color:var(--grey)'> Read More...</    p>";
    const longdesc=desc + "<p style='color:var(--grey)'> Read Less...</    p>"

    const [flag,setflag]=useState(false);

    return (<div className="grey-wrapper">
        <h2 className="coin-info-heading">{heading}</h2>
        {desc.length>200 ?(<p 
        onClick={()=> setflag(!flag)}
        className="coin-info-desc" 
        dangerouslySetInnerHTML={{__html: !flag? shortdesc:longdesc}}/>)
        :(<p dangerouslySetInnerHTML={{__html: desc}}/>)
        
    }
    </div>
    );
}

export default CoinInfo;