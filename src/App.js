import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './util/Theme';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience/Index';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [active, setActive] = React.useState('');
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      
      <Router >
        <Navbar active={active} setActive={setActive} darkMode={darkMode} setDarkMode={setDarkMode} toggleDarkMode={toggleDarkMode} />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects  />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer active={active} setActive={setActive}  />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
