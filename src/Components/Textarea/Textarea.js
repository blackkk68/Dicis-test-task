import React from 'react';
import './Textarea.css';

function Textarea(props) {
    return (
        <div className='Textarea'>
            <textarea value={props.value} onChange={props.changeValue} />
            <button onClick={props.resetValue}>Очистить поле</button>
        </div>
    )
}

export default Textarea;