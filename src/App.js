import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';


function App() {
  // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  // .then(res => console.log('api response', res.data))
  // .catch(error => console.log('error', error))
  return (
    <div className="App">
      <Header />
      <Card />
      
    </div>
  );
}

export default App;
