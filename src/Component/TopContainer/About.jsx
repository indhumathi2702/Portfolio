import React from 'react';
import { Element } from 'react-scroll';
import TopContent from './TopContent';

// React-scroll Directly used for element (id = Element)
// Directly u will put element
const About = () => {
  return (
    <Element name='about' className='topContainer'>
        <TopContent />
    </Element>
  );
}

export default About;
