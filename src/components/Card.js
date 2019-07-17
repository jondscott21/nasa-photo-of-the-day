import React from 'react';
import YouTube from 'react-youtube';

function Card(props) {
    const videoUrl = "https://www.youtube.com/embed/xc1SzgGhMKc?start=850".substring(30);
    console.log(videoUrl);
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
    return (
        <div>
            <YouTube videoId={videoUrl} opts={opts} />
            <h2>props.title</h2>
            <p>props.date</p>
        </div>
    );
}

export default Card;