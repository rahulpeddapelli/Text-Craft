
import './App.css';
import React, { useState, useEffect } from 'react';
import TextArea from './components/TextArea';
import TextUtilities from './components/TextUtilities';
import FontSelector from './components/FontSelector';
import CopyButton from './components/CopyButton';


function App() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
        setCharCount(text.length);
    }, [text]);

    return (
        <div className="App">
            <h1>Text Utility App For Text Transform</h1>
            <div className="output-container">
                <div id="text-output" className="text-output">
                    {text}
                </div>
                <div className="count-container">
                    <p>Words: {wordCount}</p>
                    <p>Characters: {charCount}</p>
                </div>
            </div>
            <TextArea text={text} setText={setText} />
            <TextUtilities text={text} setText={setText} />
            <FontSelector />
            <CopyButton text={text} />
        </div>
    );
}

export default App;
