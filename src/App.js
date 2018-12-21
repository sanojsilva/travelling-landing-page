import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sites from './components/Sites';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
    padding: 0;
    margin: 0;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
          <Header />
          <Hero />
          <br />
          <Sites />
          <Footer />
      </AppWrapper>
    );
  }
}

export default App;
