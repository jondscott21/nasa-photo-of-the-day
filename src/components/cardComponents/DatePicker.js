import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    background: blue;
    padding: 10px;
    color: white;
`

function DatePicker({date, setDate}) {
    return (
        <div>
            <input type="date" value={date} onChange={ e => setDate(e.target.value)}></input>
            <Button onclick={() => setDate()}>Change Date</Button>
        </div>
    );
}

export default DatePicker