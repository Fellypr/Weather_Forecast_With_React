import { useState , useRef} from 'react'
import './App.css'
import axios from 'axios';
import Weatherinfor from './components/weatherinfor/info';

function App() {
  const [weather,setWeather] = useState();
  const inputref = useRef(); //useref tem como função mostra a referencia , e a variavel "inputref" chama ela.
  
  async function searchCity(){
    const city = inputref.current.value;
    const key = "e02d225f58791b76945b2c0c4dee1cfb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const apidata = await axios.get(url);
    setWeather(apidata.data)
  }

  return (
    <>
      <div className='screenfirt'>
          <h1>Previsão do Tempo</h1>
          <input type="text" placeholder='Digite o nome da cidade' ref={inputref}/>
          <button onClick={searchCity}>Buscar</button>
      </div>
      {weather && <Weatherinfor weather = {weather}/>}
      
    </>
  )
}
//PAREI NA PARET DOS COMPONENTS NO MINUTO 26:42
export default App
