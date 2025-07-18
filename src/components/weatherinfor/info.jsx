/* eslint-disable react/prop-types*/
import "./info.css";
import { WiHumidity } from "react-icons/wi";

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
          <p>Sensação termica:{Math.round(weather.main.feels_like)}ºC</p>
          <div className="humidity">
            <WiHumidity size={40} color="black" />
            <p>Umidade:{weather.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherinfor;
