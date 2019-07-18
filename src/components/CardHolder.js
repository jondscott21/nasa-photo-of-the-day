import React from 'react';
import Media from './cardComponents/Media';
import DatePicker from './cardComponents/DatePicker';
import styled from 'styled-components';
import "semantic-ui-css/semantic.min.css";
import { Card } from 'semantic-ui-react';

function CardHolder({title, date, setDate, url, explanation, mediaType}) {
    // function dateHandler(date, setDate) {

    // }
    return (
        <div>
            <DatePicker date={date} setDate={setDate} />
            <Media url={url} mediaType={mediaType} />
            <h2>{title}</h2>
            <p>{explanation}</p>
        </div>
    );
    
}

export default CardHolder;