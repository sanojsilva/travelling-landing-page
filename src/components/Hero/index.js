import React from 'react';
import MidSection from './MidSection';
import styled from 'styled-components';
import background_image from '../../resources/images/background_image.jpeg';


const HeroWrapper = styled.div`
    background-image: url(${background_image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-shadow: border-box;
`;

const Hero = (props) => {

    return (
        <HeroWrapper>
            <MidSection text="Beautiful Landscapes" />
        </HeroWrapper>
    );
}


export default Hero;
