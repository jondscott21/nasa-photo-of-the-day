import React from 'react';

function DatePicker() {
    return (
        <div>
            <input type="date" value={date} onChange={ e => setDate(e.target.value)}></input>
            <button onclick={() => setDate()}></button>
        </div>
    );
}

export default DatePicker