
import React from 'react';

const TextArea = ({ text, setText }) => {
    return (
        <div>
            <textarea
                rows="8"
                cols="50"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here..."
            />
        </div>
    );
};

export default TextArea;
