
import React from 'react';

const CopyButton = ({ text }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
    };

    return (
        <button onClick={copyToClipboard}>Copy Text</button>
    );
};

export default CopyButton;
