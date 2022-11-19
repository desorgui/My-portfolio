import React from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

let options = {
  sectionClassName:     'section',
  anchors:              ['1', '2', '3', '4'],
  scrollBar:            false,
  navigation:           true,
  verticalAlign:        false,
  sectionPaddingTop:    '50px',
  sectionPaddingBottom: '50px',
  arrowNavigation:      true
};

function App() {
  return (
    <>
      <Navbar />
      <SectionsContainer {...options}>
      <Section><Hero /></Section>
      <Section><Portfolio /></Section>
      </SectionsContainer>
    </>
  );
}

export default App;
