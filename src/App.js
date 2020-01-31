import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { RideContext } from './contexts/Ride-Context'
import {axiosWithAuth} from "./utils/AxiosWithAuth";
import Route from 'react-router-dom';
import Login from './components/login'

const [rideForLife, setRideForLife] = useState([])

useEffect(()=>{
    axiosWithAuth
        .get('api/drivers')
        .then(r=> {
            console.log(r.data)
            setRideForLife(r.data)
        })
        .catch(err =>{
            console.log(err, 'Error fetching data')
        })
},[])

function App() {
  return (
      <RideContext.Provider value={{ rideForLife }}>
        <div className="App">
            <Route exact path='/' component={Login} />
            <header className="App-header">
            </header>
        </div>
      </RideContext.Provider>
);
}

export default App;
