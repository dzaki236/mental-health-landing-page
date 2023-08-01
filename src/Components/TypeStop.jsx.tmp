import  { useState, useEffect, useRef } from 'react';
// import Typewriter from 'typewriter-effect';
import Typewriter from 'typewriter-effect';
const TypeStop = ({ text, speed }) => {
  const [isTyping, setIsTyping] = useState(true);
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (isTyping) {
      typewriterRef.current.typeString(text).start();
    } else {
      typewriterRef.current.stop();
    }
  }, [isTyping, text]);

  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        setIsTyping(true);
      }, 2000); // Adjust this time to set the duration for how long the text should be cleared before starting the typewriter effect again.
    }
  }, [isTyping]);

  return (
    <Typewriter
      onInit={(typewriter) => (typewriterRef.current = typewriter)}
      options={{ delay: speed }}
    />
  );
};

export default TypeStop;
