import React from 'react';
import styled from "styled-components";
import { Input, Button } from 'semantic-ui-react';

const DateWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const ButtonStyle = styled(Button)`
    background: #A3B4E0;
    color: white;
`

function DatePicker({date, setDate, inputValue, setInputValue,}) {
    function handleChange(e) {
        setInputValue(e.target.value)
    }
    return (
        <DateWrapper>
            {/* <input type="date" value={date} onChange={ e => setDate(e.target.value)}></input> */}
            <Input type='date' onChange={handleChange} ></Input>
            <Button style={{background: '#A3B4E0'}} onClick={() => setDate(inputValue)}>Change Date</Button>
        </DateWrapper>
    );
}

export default DatePicker