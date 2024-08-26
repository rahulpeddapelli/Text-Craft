import React from 'react';

const TextUtilities = ({ text, setText }) => {
    const handleCaseConversion = (option) => {
        let newText = text;
        switch (option) {
            case 'uppercase':
                newText = text.toUpperCase();
                break;
            case 'lowercase':
                newText = text.toLowerCase();
                break;
            case 'titlecase':
                newText = text
                    .toLowerCase()
                    .split(' ')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                break;
            case 'sentencecase':
                newText = text
                    .toLowerCase()
                    .split('. ')
                    .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
                    .join('. ');
                break;
            default:
                break;
        }
        setText(newText);
    };

    const handleRemoveSpaces = (option) => {
        let newText = text;
        switch (option) {
            case 'extra':
                newText = text.replace(/\s+/g, ' ');
                break;
            case 'all':
                newText = text.replace(/\s+/g, '');
                break;
            case 'startend':
                newText = text.trim();
                break;
            default:
                break;
        }
        setText(newText);
    };

    const handleFontSizeChange = (size) => {
        document.getElementById('text-output').style.fontSize = `${size}px`;
    };

    const handleFontFamilyChange = (fontFamily) => {
        document.getElementById('text-output').style.fontFamily = fontFamily;
    };

    return (
        <div>
            <div>
                <label>Case Conversion: </label>
                <select onChange={(e) => handleCaseConversion(e.target.value)}>
                    <option value="">Select</option>
                    <option value="uppercase">Uppercase</option>
                    <option value="lowercase">Lowercase</option>
                    <option value="titlecase">Title Case</option>
                    <option value="sentencecase">Sentence Case</option>
                </select>
            </div>
            <div>
                <label>Remove Spaces: </label>
                <select onChange={(e) => handleRemoveSpaces(e.target.value)}>
                    <option value="">Select</option>
                    <option value="extra">Remove Extra Spaces</option>
                    <option value="all">Remove All Spaces</option>
                    <option value="startend">Remove Spaces from Start/End</option>
                </select>
            </div>
            <div>
                <label>Font Size: </label>
                <input
                    type="number"
                    min="1"
                    max="50"
                    defaultValue="16"
                    onChange={(e) => handleFontSizeChange(e.target.value)}
                />
            </div>
            <div>
                <label>Font Family: </label>
                <select onChange={(e) => handleFontFamilyChange(e.target.value)}>
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="Courier New, monospace">Courier New</option>
                    <option value="Georgia, serif">Georgia</option>
                    <option value="Tahoma, sans-serif">Tahoma</option>
                    <option value="Times New Roman, serif">Times New Roman</option>
                    <option value="Verdana, sans-serif">Verdana</option>
                </select>
            </div>
        </div>
    );
};

export default TextUtilities;
