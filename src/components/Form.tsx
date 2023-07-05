import { useState } from 'react';

// https://api.weatherapi.com/v1/current.json?key=haku818181@gmail.com&q=London&aqi=no
// https://api.weatherapi.com/v1/current.json?key=8b1c6068fb114c59952141728230507&q=London&aqi=no

const Form = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=8b1c6068fb114c59952141728230507&q=London&aqi=no")
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return(
    <form>
      <input type = "text" name = "city" placeholder = "都市名" onChange = {e => setCity(e.target.value)}/>
      <button type = "submit" onClick = {getWeather}>Get Weather</button>
    </form>
  );
};

export default Form;