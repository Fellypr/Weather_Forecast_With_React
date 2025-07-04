import { useState ,useEffect} from 'react'
import './App.css'
import axios from 'axios';
import Weatherinfor from './components/weatherinfor/info';

function App() {
  const [weather,setWeather] = useState();
  const [SearchCity, setSearchCity] = useState("");
  
  async function searchCity(){
    const key = "e02d225f58791b76945b2c0c4dee1cfb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&appid=${key}&lang=pt_br&units=metric`;
    const apidata = await axios.get(url);
    setWeather(apidata.data)
    console.log(apidata.data);
  }
  useEffect(() => {
    if(SearchCity.length > 0){
      searchCity();
    }else{
      setSearchCity("");
      setWeather("");
    }
  },[SearchCity])

  return (
    <>
      <div className='screenfirt'>
          <h1>Previsão do Tempo</h1>
          <input type="text" placeholder='Digite o nome da cidade' onChange={(e) => setSearchCity(e.target.value)}/>
          {weather && <Weatherinfor weather = {weather}/>}
      </div>
    </>
  )
}
export default App
