import React from 'react';
import DatePicker from './cardComponents/DatePicker';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

const CardWrapper = styled.section`
    width: 50%;
    margin: 0 auto;
`

function CardHolder({ title, date, setDate, url, explanation, mediaType }) {
    // function dateHandler(date, setDate) {

    // }
    return (
        // <div>
        //     <DatePicker date={date} setDate={setDate} />
        //     <Media url={url} mediaType={mediaType} />
        //     <h2>{title}</h2>
        //     <p>{explanation}</p>
        // </div>
        <CardWrapper>
            <Card fluid color='blue'>
                {mediaType === "video" ? <iframe src={url}></iframe> : <img src={url}></img>}
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{date}</Card.Meta>
                    <Card.Description>
                        {explanation}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <DatePicker date={date} setDate={setDate} />
                </Card.Content>
            </Card>
        </CardWrapper>
        
    );

}

export default CardHolder;