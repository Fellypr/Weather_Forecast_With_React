import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Weatherinfor from "./components/weatherinfor/info";
import {Container }from "./styles/style";

import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function App() {
  const [weather, setWeather] = useState();
  const [SearchCity, setSearchCity] = useState("");

  async function searchCity() {
    const key = "e02d225f58791b76945b2c0c4dee1cfb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&appid=${key}&lang=pt_br&units=metric`;
    const apidata = await axios.get(url);
    setWeather(apidata.data);
    console.log(apidata.data);
  }
  useEffect(() => {
    if (SearchCity.length > 0) {
      searchCity();
    } else {
      setSearchCity("");
      setWeather("");
    }
  }, [SearchCity]);

  return (
    <>
      <div className="screenfirt">
        <div className="search">
          <FaLocationDot size={30} color="black" />
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </div>
        <Container activo={weather}> {weather && <Weatherinfor weather={weather} />}</Container>
      </div>
    </>
  );
}
export default App;
