import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div onClick={props.clicked}
             className="char">
            <p>{props.letter}</p>
        </div>
    )
}

export default char;