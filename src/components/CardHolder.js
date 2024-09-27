import React from 'react';
import DatePicker from './cardComponents/DatePicker';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';

const CardWrapper = styled.section`
    width: 60%;
    margin: 30px auto;
`

function CardHolder({ title, date, setDate, url, explanation, mediaType, inputValue, setInputValue }) {
    // function dateHandler(date, setDate) {

    // }
    return (
        <CardWrapper style={{fontFamily: 'Roboto, sans-serif', fontSize: '1.3rem'}}>
            <GoogleFontLoader fonts={[{font: 'Roboto', weights: [400]}]} />
            <Card fluid color='blue' >
                {mediaType === "video" ? <iframe src={url}></iframe> : <img src={url}></img>}
                <Card.Content style={{background: '#FEF9E2'}} >
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{date}</Card.Meta>
                    <Card.Description >
                        {explanation}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra style={{background: '#FEF9E2'}}>
                    <DatePicker date={date} setDate={setDate} inputValue={inputValue} setInputValue={setInputValue} />
                </Card.Content>
            </Card>
        </CardWrapper>
        
    );

}

export default CardHolder;