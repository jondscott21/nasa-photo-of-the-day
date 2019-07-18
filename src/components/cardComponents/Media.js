import React from 'react';

function Media({url, mediaType}) {
    return (
        <div>
            {mediaType === "video" ? <iframe width="640" height="390" src={url}></iframe> : <img src={url}></img>}
        </div>
          
    );
}


export default Media;