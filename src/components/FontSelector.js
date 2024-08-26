
import React from 'react';

const FontSelector = () => {
    const changeFontFamily = (fontFamily) => {
        document.getElementById('text-output').style.fontFamily = fontFamily;
    };

    return (
        <div>
            <button onClick={() => changeFontFamily('Arial, sans-serif')}>Arial</button>
            <button onClick={() => changeFontFamily('Courier New, monospace')}>Courier New</button>
            <button onClick={() => changeFontFamily('Georgia, serif')}>Georgia</button>
            <button onClick={() => changeFontFamily('Tahoma, sans-serif')}>Tahoma</button>
        </div>
    );
};

export default FontSelector;
