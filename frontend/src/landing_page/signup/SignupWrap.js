import React, { useRef } from 'react';
import Hero from './Hero';
import Investment from './Investment';
import StepsToSignup from './StepforSignup';
import Benifits from './Benifits';
import Faq from './Faq';
import OpenAccount from '../Openaccount';

function SignupWrap() {
  const topRef = useRef(null); // Create a ref for the top of the page

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  return (
    <div ref={topRef}>
      <Hero />
      <Investment onClick={scrollToTop}/>
      <StepsToSignup />
      <Benifits />
      <Faq />
      <OpenAccount onClick={scrollToTop} /> {/* Pass scrollToTop as a prop */}
    </div>
  );
}

export default SignupWrap;