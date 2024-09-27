import React from 'react';
import styled from 'styled-components';

const MediaDiv = styled.div`
    display: flex;
    align-content: center;
    width: 10%;
    height: 10%;
`

function Media({url, mediaType}) {
    return (
        <MediaDiv>
            {mediaType === "video" ? <iframe width="640" height="390" src={url}></iframe> : <img width="951"  src={url}></img>}
        </MediaDiv>
          
    );
}


export default Media;