import React from 'react';

const validation = (props) => {

    let validateMessage = 'Text Too Short';

    if (props.validateText >= 5) {
        validateMessage = 'Text Long Enough';
    }

    return (
        <div>
            <p>{validateMessage}</p>
        </div>
    )
}

export default validation;