import React from 'react';
import styled from 'styled-components';

const MidSectionWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 26px;
    border: 2px solid white;
    padding: 15px;
    font-weight: bold;
    border-radius: 5px;

`;

const MidSection = (props) => {

    return(
        <MidSectionWrapper>
            {props.text}
        </MidSectionWrapper>
    );
}


export default MidSection;
