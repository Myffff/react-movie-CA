import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/index";
import Series from "./Pages/Series/index";
import TopRating from "./Pages/TopRating/index";
import Trending from "./Pages/Trending";
import Search from "./Pages/Search/index";
import MaterialUISwitch from "./components/Switch";
import FormControlLabel from '@mui/material/FormControlLabel';

const App = () => {
  const [color, setColor] = useState('#39445a')
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
      setChecked(event.target.checked);
      if (color === '#39445a') {
        setColor('#d2c3b0')
      } else {
        setColor('#39445a')
      }
  };

  return (
    <div style={{backgroundColor: color}}>
    <BrowserRouter>
      <Header />
      <FormControlLabel
        control={<MaterialUISwitch/>}
        checked={checked}
        onChange={handleChange}
        sx={{marginTop: "100px",
          marginLeft: "20px",
          }}
      />
      <Routes>
        <Route path="/" element={<Trending/>} />
        <Route path="/topRating" element={<TopRating/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/search" element={<Search/>} />
        {/* add some more */}
      </Routes>
      <SimpleBottomNavigation />
    </BrowserRouter>
    </div>
  );
}

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App/>)
