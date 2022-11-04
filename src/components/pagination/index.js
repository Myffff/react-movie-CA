import React from "react";
import { Pagination } from "@mui/material";

const CustomPagination = ({setPage,numOfPage = 10}) => {
    console.log(numOfPage);
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };

    return(
        <div>
        <Pagination 
            sx={{
                marginLeft: "30%",
                marginBottom: "80px",
            }}
            onChange={(e) => handlePageChange(e.target.textContent)} 
            count={numOfPage} variant="outlined" 
            color="primary" size="large"/>
        </div>
    )
        
}

export default CustomPagination;