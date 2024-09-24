
import './App.css';
import React, { useState, useEffect } from 'react';
import TextArea from './components/TextArea';
import TextUtilities from './components/TextUtilities';
import CopyButton from './components/CopyButton';
import TypingHeadEffect from './components/TypingHeadEffect';


function App() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [lineCount, setLineCount] = useState(0);

    useEffect(() => {
        setWordCount(text.trim() ? text.trim().split(' ').filter(Boolean).length : 0);
        setCharCount(text.length);
        
        setLineCount(text ? text.split('.').length : 0);
    }, [text]);

    return (
        <div className="App">
            <TypingHeadEffect message={"Text Utility App For Text Transform"} />

            <TextArea text={text} setText={setText} />

            <div className='textSummaryContainer' style = {{border: "1px solid grey",borderRadius : '5px', marginBottom :'20px'}}>
                <h3 style={{ margin:'0px', padding :"10px",borderBottom : "1px solid grey"}}>Text Summary</h3>
                <div style={{display:'flex', alignItems :"center", justifyContent :'space-around', padding : '5px'}}>
                    <div>Charectors Count : {charCount}</div>
                    <div>Words Count : {wordCount}</div>
                    <div>Lines count : {lineCount}</div>
                </div>
            </div>

            <TextUtilities text={text} setText={setText} />
            
            <CopyButton text={text} setText={setText}/>

        </div>
    );
}

export default App;
