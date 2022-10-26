import React from 'react';

const TextHeader = (props) => {
    return (
        <props.type>{props.text}</props.type>
    );
};

export default TextHeader;