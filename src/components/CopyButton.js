
import React from 'react';

const CopyButton = ({ text , setText}) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
    };

    return (
        <div>
            <button className = "copyBtn" onClick={copyToClipboard}>Copy Text</button>
            <button className = "clearTextBtn" onClick={()=>setText("")}>Clear Text</button>
            
        </div>
    );
};

export default CopyButton;
