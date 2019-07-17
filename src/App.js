import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';


function App() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [url, setUrl] = useState('')
  const [explanation, setExplanation] = useState('')
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=LsGthAZdtVwWDpi3fKepTIiR6rwVLIjTJHoOK67J')
    .then(res => {
      console.log(res.data)
      setTitle(res.data.title);
      setDate(res.data.date);
      setUrl(res.data.url);
      setExplanation(res.data.explanation);

    })
    .catch(error => console.log('error', error))
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Card title={title} date={date} url={url} explanation={explanation} />
      
    </div>
  );
}

export default App;
