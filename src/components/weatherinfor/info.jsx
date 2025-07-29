/* eslint-disable react/prop-types*/
import "./info.css";
import { WiHumidity } from "react-icons/wi";
import { FaThermometerQuarter } from "react-icons/fa";

function Weatherinfor({ weather }) {
  console.log(weather);

  return (
    <div className="windowsMain">
      <h2>{weather.name}</h2>

      <div className="info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          width={100}
        />
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {Math.round(weather.main.temp)}ºC
        </p>
        <p className="description">{weather.weather[0].description}</p>
        <div className="extraInfo">
          <div className="humidity">
            <FaThermometerQuarter size={40} color="white" />
            <p style={{ color: "white" }}>Sensação termica:{Math.round(weather.main.feels_like)}ºC</p>
          </div>
          <div className="humidity">
            <WiHumidity size={40} color="white" />
            <p style={{ color: "white" }}>Umidade:{weather.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherinfor;
