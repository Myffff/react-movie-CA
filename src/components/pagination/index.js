import React from "react";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        neutral: {
          main: '#ae9c98',
          contrastText: '#000000',
        },
    },
});

const CustomPagination = ({handleChange, numOfPage = 10}) => {
    return(
        <div>
            <ThemeProvider theme={darkTheme}>
                <Pagination 
                    sx={{
                        marginLeft: "30%",
                        paddingBottom: "25px",
                        marginBottom: "50px",
                    }}
                    onChange={handleChange} 
                    count={numOfPage} variant="outlined" 
                    color="neutral" size="large"/>
            </ThemeProvider>
        </div>
    )
        
}

export default CustomPagination;