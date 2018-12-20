import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
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
          <SocialProof />
      </AppWrapper>
    );
  }
}

export default App;
