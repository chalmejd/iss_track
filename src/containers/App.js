import React, { useState, useEffect } from 'react';
import './App.css';
import Map from '../components/Map';

function App() {
  const [locData, setLocData] = useState({timestamp:"0", iss_position: {longitude: "0", latitude: "0"}});
  const [intervalID, setIntervalID] = useState(0);
  const [shouldIntervalBeCancelled, setShouldIntervalBeCancelled] = useState(false);
  
  // For starting the interval ->
  useEffect(() => {
      let intervalID = setInterval(updateLocation, 5000);
      setIntervalID(intervalID);
    }, []);
  
  useEffect(() => {
      if (shouldIntervalBeCancelled) {
        clearInterval(intervalID); 
      }
    }, [shouldIntervalBeCancelled]);

  function updateLocation() {
    try {
      fetch('http://api.open-notify.org/iss-now.json')
      .then(resp => resp.json())
      .then(current => setLocData(current));
      setShouldIntervalBeCancelled(true); 
    } catch {
      
    }
  }
      

  const unixConvert = (timestamp) => {
    var date = new Date(timestamp * 1000);
    var hours = "0" + date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return `${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  }

  let lat = locData.iss_position.latitude
  let long = locData.iss_position.longitude

  return (
    <div className="App">
        <h1>ISS TRACKER</h1>
        <h3>Updated at: {unixConvert(locData.timestamp)}</h3>
        <p>Longitude: {long}; Latitude: {lat};</p>
        <Map long = {Number(long)} lat = {Number(lat)} className='Map'></Map>
        
        
    </div>
  );

}

export default App;
