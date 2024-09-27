import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import CardHolder from './components/CardHolder';
import "semantic-ui-css/semantic.min.css";
import styled from 'styled-components'


const Wrapper = styled.div`
  background: #C1D0F4;
  height: 100%
`


function App() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [url, setUrl] = useState('')
  const [explanation, setExplanation] = useState('')
  const [mediaType, setMediaType] = useState('')
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=LsGthAZdtVwWDpi3fKepTIiR6rwVLIjTJHoOK67J&date=${date}`)
    .then(res => {
      console.log(res.data)
      setTitle(res.data.title);
      setDate(res.data.date);
      setUrl(res.data.url);
      setExplanation(res.data.explanation);
      setMediaType(res.data.media_type);

    })
    .catch(error => console.log('error', error))
  }, [date])
  
  return (
    
    <Wrapper className="App">
      <Header  />
      <CardHolder title={title} date={date} setDate={setDate} url={url}
       explanation={explanation} mediaType={mediaType} inputValue={inputValue} setInputValue={setInputValue} />
      
    </Wrapper>
  );
}

export default App;
