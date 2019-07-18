import React from 'react';
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';

const HeaderStyle = styled.header`
    background: #A3B4E0;
    height 100px;
`
const H1 = styled.h1`
    font-size 5rem;
`

function Header() {
    return (
        <HeaderStyle>
            <GoogleFontLoader fonts={[{font: 'Noto Sans', weights: [400, 700]}]} />
            <H1 style={{fontFamily: 'Noto Sans, sans-serif'}}>Nasa Picture of the Day</H1>
        </HeaderStyle>
    );
}

export default Header;