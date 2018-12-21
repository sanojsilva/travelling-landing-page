import React from 'react';
import styled from 'styled-components';
import TopText from './TopText';
import MidText from './MidText';
import Buttons from './Buttons';
import Zoom from 'react-reveal/Zoom'

const MidSectionWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 1;
`;

const MidSection = (props) => {

    const midText = "Adipisicing itaque dolor quasi aliquam voluptates possimus Nobis alias recusandae deserunt nemo obcaecati! Eaque illo alias accusamus earum impedit nisi?";

    return(
        <MidSectionWrapper>
            <Zoom>
                <TopText text="Like to Travel" />
                <MidText text={midText} />
                <Buttons />
            </Zoom>
        </MidSectionWrapper>
    );
}


export default MidSection;
