/* eslint-disable react/prop-types*/
import './info.css';

function Weatherinfor ({weather}){
    console.log(weather);

    return(
        <div className='windowsMain'>
            <h2>{weather.name}</h2>

            <div className='info'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} width={100}/>
                <p>{Math.round(weather.main.temp)}ºC</p>
                <p className='description'>{weather.weather[0].description}</p>
                <p>Sensação termica:{Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade:{weather.main.humidity}%</p>
                <p>pressão:{weather.main.pressure}</p>
            </div>
        </div>
    );
};

export default Weatherinfor;