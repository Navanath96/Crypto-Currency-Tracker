import React from "react";
import "./style.css"
import TemporaryDrawer from "./Drawer"
import Button from "../Button/index"
import { Link } from "react-router-dom";

function Header(){
    return (
        <div className="navbar">
        <h1 className="logo">CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
        <div className="links">
            <Link to="/"><p className="link">Home</p></Link>
            <Link to="/compare"><p className="link">Compare</p></Link>
            <Link to="/watchlist"><p className="link">WathchList</p></Link>
            <Link to="/Dashboard">

                <Button text={"Dashboard"}
                // outlined={true}
                onClick={()=> console.log("btn clicked")}/>
            </Link>
        </div>
        <div className="mobile-drawer">
            <TemporaryDrawer/>
        </div>
        </div>
    )
}

export default Header ;