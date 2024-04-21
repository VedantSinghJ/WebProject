import React, { useState } from 'react';
import './cta.css';
import { useInView } from 'react-intersection-observer';
import Typist from 'react-typist';
import { motion } from "framer-motion"

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <div className='gpt3__cta' ref={ref} id='Demo'>
      <div className='gpt3__cta-content' >
        <p>Early Access to Get Started</p>
        {isVisible && (
          <Typist cursor={{ show: false }}>
            <h3>Start exploring the endless possibilities now, with this DEMO</h3>
          </Typist>
        )}
      </div>

      <motion.div className='gpt3__cta-btn' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <a href="http://localhost:5173/"> <button type='button'>Get Started</button></a>
      </motion.div>
    </div>
  );
};

export default CTA;
