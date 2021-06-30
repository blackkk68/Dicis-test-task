import React, { useState } from 'react';
import './Container.css';
import Textarea from '../Textarea/Textarea';
import Description from '../Description/Description';

function Container() {
    const [textareaValue, setTextareaValue] = useState('');

    function changeValue(evt) {
        setTextareaValue(evt.target.value);
    }

    function resetValue() {
        setTextareaValue('');
    }

    return (
        <div className='Container'>
            <Textarea value={textareaValue} changeValue={changeValue} resetValue={resetValue} />
            <Description value={textareaValue} />
        </div>
    )
}

export default Container;