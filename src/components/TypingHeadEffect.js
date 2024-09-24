import React, { useState, useEffect } from 'react';

const TypingEffect = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < message.length) {
        const nextText = message.substring(0, index + 1);
        setDisplayedText(nextText);
        index += 1;
      }else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [message]);

  return <h1>{displayedText}</h1>;
};

export default TypingEffect;
