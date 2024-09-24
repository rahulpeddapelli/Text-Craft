
import React, { useState } from 'react';



// Reusable component for each section
const SubView = ({ title, children, onBack }) => (
    <div className='SubView' style={{ border: "1px solid grey", borderRadius: '5px' }}>
        <div className='SubViewHeader' style={{ display: 'flex', alignItems: 'center', borderBottom: "1px solid grey", padding: "10px" }}>
            <div onClick={onBack} style={{ cursor: 'pointer', marginRight: '10px', fontSize: "20px" }}>
                <b>&#8592;</b>
            </div>
            <div><b>{title}</b></div>
        </div>
        <div className='SubViewBody' style={{ display: 'flex', justifyContent: "space-around",flexWrap: "wrap", padding: '10px' }}>
            {children}
        </div>
    </div>
);

const TextUtilities = ({ text, setText }) => {
    const [view, setView] = useState('main'); // Track the current view

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
                newText = text.split(' ').filter(Boolean).join(' ');
                break;
            case 'all':
                newText = text.split(' ').join('');
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



    const handleTextFormat = (option, userDefinedLines) => {
        let newText = text;
        switch (option) {
            case 'paraToNewLine':
                newText = text.split('. ').join('\n');
                break;
            case 'userDefinedBreak':
                let words = text.split(' ');
                newText = words.reduce((acc, word, index) => {
                    return acc + word + ((index + 1) % userDefinedLines === 0 ? '\n' : ' ');
                }, '');
                break;
            default:
                break;
        }
        setText(newText);
    };



    // Main view: shows buttons for each utility section
    const MainView = () => (
        <div className='MainViewContainer' style={{ border: "1px solid grey", borderRadius :"5px"}}>
            <h3 style={{borderBottom: "1px solid grey", margin : '0px', padding : "10px"}}>Text Utility Options</h3>

            <div className='MainViewOptions' style={{ display: 'flex', justifyContent: 'space-around',padding : "10px", flexWrap : "wrap"}}>
                <button onClick={() => setView('caseConversion')}>Case Conversion</button>
                <button onClick={() => setView('removeSpaces')}>Remove Spaces</button>
                <button onClick={() => setView('fontSize')}>Font Size</button>
                <button onClick={() => setView('fontFamily')}>Font Family</button>
                <button onClick={() => setView('textFormat')}>Text Format</button>
            </div>
        </div>
    );




    // Subcomponent: Case Conversion
    const CaseConversionView = () => (
        <SubView title="Case Conversion" onBack={() => setView('main')}>
            <button onClick={() => handleCaseConversion('uppercase')}>Uppercase</button>
            <button onClick={() => handleCaseConversion('lowercase')}>Lowercase</button>
            <button onClick={() => handleCaseConversion('titlecase')}>Title Case</button>
            <button onClick={() => handleCaseConversion('sentencecase')}>Sentence Case</button>
        </SubView>
    );




    // Subcomponent: Remove Spaces
    const RemoveSpacesView = () => (
        <SubView title="Remove Spaces" onBack={() => setView('main')}>
            <button onClick={() => handleRemoveSpaces('extra')}>Remove Extra Spaces</button>
            <button onClick={() => handleRemoveSpaces('all')}>Remove All Spaces</button>
            <button onClick={() => handleRemoveSpaces('startend')}>Remove Spaces from Start/End</button>
        </SubView>
    );



    // Subcomponent: Font Size
    const FontSizeView = () => (
        <SubView title="Font Size" onBack={() => setView('main')}>
            <input
                type="number"
                min="1"
                max="50"
                defaultValue="16"
                onChange={(e) => handleFontSizeChange(e.target.value)}
            />
        </SubView>
    );



    // Subcomponent: Font Family
    const FontFamilyView = () => (
        <SubView title="Font Family" onBack={() => setView('main')}>
            <button onClick={() => handleFontFamilyChange('Arial, sans-serif')}>Arial</button>
            <button onClick={() => handleFontFamilyChange('Courier New, monospace')}>Courier New</button>
            <button onClick={() => handleFontFamilyChange('Georgia, serif')}>Georgia</button>
            <button onClick={() => handleFontFamilyChange('Tahoma, sans-serif')}>Tahoma</button>
            <button onClick={() => handleFontFamilyChange('Times New Roman, serif')}>Times New Roman</button>
            <button onClick={() => handleFontFamilyChange('Verdana, sans-serif')}>Verdana</button>
        </SubView>
    );



    // Subcomponent: Text Format
    const TextFormatView = () => (
        <SubView title="Text Format" onBack={() => setView('main')}>
            <button onClick={() => handleTextFormat('paraToNewLine')}>Para to New Line</button>
            <button onClick={() => {
                const userDefinedLines = prompt('Enter number of lines:');
                handleTextFormat('userDefinedBreak', userDefinedLines);
            }}>Break Para into User-Defined Lines</button>
        </SubView>
    );



    // Rendering logic based on the current view
    return (
        <div className='UtilityFunctionsContainer' style={{ marginBottom: '20px' }}>
            {view === 'main' && <MainView />}
            {view === 'caseConversion' && <CaseConversionView />}
            {view === 'removeSpaces' && <RemoveSpacesView />}
            {view === 'fontSize' && <FontSizeView />}
            {view === 'fontFamily' && <FontFamilyView />}
            {view === 'textFormat' && <TextFormatView />}
        </div>
    );
};

export default TextUtilities;
