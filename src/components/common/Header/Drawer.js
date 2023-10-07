import { useState } from "react"
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton onClick={() => setOpen(true)}><MenuRoundedIcon className="link" />
            </IconButton>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}>
                <div className="drawer-div">
                <Link to="/">
                        <p className="link">Home</p>
                        </Link>
                    <Link to="/compare">
                        <p className="link">Compare</p>
                        </Link>
                    <Link to="/watchlist">
                        <p className="link">WathchList</p>
                        </Link>
                    <Link to="/Dashboard">
                        <p className="link">DashBoard</p>
                         </Link>
                </div>
            </Drawer>
        </div>
    );
}