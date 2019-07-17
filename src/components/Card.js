import React from 'react';
import YouTube from 'react-youtube';

function Card({title, date, url, explanation}) {
    const videoUrl = url.substring(30);
    return (
        <div>
            <iframe width="640" height="390"
                src={url}>
            </iframe>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{explanation}</p>
        </div>
    );
    
}

export default Card;