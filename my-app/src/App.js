import React, { useState } from 'react';
import './App.css';

function App() {  
  const [temperature, setTemperature] = useState("20");
  const [waterState, setWaterState] = useState("")
  const [imageStateClass, setImageStateClass] = useState("")

  const stateOfWater = (valueTemperature = 0) => {
    let currentTemperature = parseInt(valueTemperature);
    setImageStateClass("");
    setWaterState("Liquid");
    currentTemperature <= 0 ? setWaterState("Solid"): currentTemperature >= 100 ? setWaterState("Gas"): setWaterState("Liquid");

    setImageStateClass("img-"+waterState.toLowerCase());
  }
    const handleChangeInput = (e) => {
      setTemperature(e.target.value);
      stateOfWater(e.target.value)
    };
  return (
    <div className="App">
      <div className="App-header">
        <h1>State of Water</h1>
        <input className="input-temperature" onChange={handleChangeInput} value={temperature}></input>
        <div className="state-info">
        At <span> {temperature}°C</span>, water is considered to be a <span>"{waterState}"</span> state of matter.
        </div>
        <div className="images-container">
          <img className={imageStateClass} onerror="this.style.display='none'"></img>
          {/* <img className="img-liquid" onerror="this.style.display='none'"></img>
          <img className="img-solid" onerror="this.style.display='none'"></img> */}
        </div>
      </div>
    </div>
  );
}

export default App;
