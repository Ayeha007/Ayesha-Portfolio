'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';


const TypingAnimation = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    if (typingRef.current) {
      const options = {
        strings: ['Ui/Ux Designer','Graphic Designer' ,'Front-End Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop:true
      };
      const typed = new Typed(typingRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <div ref={typingRef} />;
};

export default TypingAnimation;
