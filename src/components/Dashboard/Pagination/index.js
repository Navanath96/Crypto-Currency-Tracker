import React,{useState} from 'react';
import "./style.css";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';


export default function PaginationComponent({page , handleChange}) {


  return (
    <div className='pagination'>
      <Pagination count={10} page={page} onChange={handleChange} 
      sx={{
        color:"var(--white)",
        "& .Mui-selected" :{
            backgroundColor:"var(--blue) !important",
            color:"#fff !important",
            borderColor:"var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis":{
            border:"0px solid var(--grey) !important", 
        },
        "& .MuiPaginationItem-text":{
            color:"var(--white)",
            border:"1px solid var(--grey)",
        },
      }}
      />
      </div>
  );
}