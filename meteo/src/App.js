import React, { useEffect, useState } from 'react';
import './App.css';
import loaderImg from './loader.gif'
import  axios from 'axios';

function App() {

  const [weather, setWeather] = useState(null);
  const [displayLoader, setDisplayLoader] = useState(false);
  const [error, setError] = useState(null);



  const callAPI = (address) => {
    setDisplayLoader(true);
    setError(null)
    setWeather(null)


    //https://github.com/axios/axios
   // https://axios-http.com/docs/example
   //https://github.com/visualcrossing/WeatherIcons/tree/main/PNG/1st%20Set%20-%20Color
   const  url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+address+"?unitGroup=metric&include=current&key=T56L3K4W9VRMZW3GFG2LRXV67&contentType=json"
    axios.get(url)
    .then(function (response) {
      // handle success
      console.log("response",response);
      setWeather(response.data)
      setDisplayLoader(false)

    })
    .catch(function (error) {
      // handle error
      console.log("error",error.response.data);
      
      setError(error.response.data);
      setDisplayLoader(false);
    });
  }

  const handleKeyDown = (event) => {
    if(event.key == "Enter") { 
       let searchKeyword =  event.target.value;
       callAPI(searchKeyword);
    }
  }

  useEffect(() => {
    if(weather==null && displayLoader===false && error==null){
      callAPI("Tunisia");
    }
  });


  let box = ""
  if(weather!=null){
    let icon =<img src={"/icons/"+weather.currentConditions.icon+".png"}  />
    let title= weather.currentConditions.conditions
    let temp = "Temperature " +weather.currentConditions.temp+"°"
    let address = weather.address
    box = <fieldset style={{width:"150px"}}>
            <legend>{address}</legend>
            {icon} <br></br>
            {title}<br></br>
            {temp}
          </fieldset>
  }
  return (
    <div className="App">
      Rechercher &nbsp;<input placeholder="Tapez votre pays/ville"  onKeyDown={handleKeyDown}  />
      <br></br>
      {error!=null && <div style={{color:"red"}}>Échec du chargement des données depuis le web service :<br></br><i> {error}</i></div>}
      
      { displayLoader 
        ? <img src={loaderImg} />
        : <div>{box}</div>
      }

          

    </div>
  );
}

export default App;
