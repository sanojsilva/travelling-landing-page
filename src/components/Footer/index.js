import React from 'react';
import styled from 'styled-components';
import BottomText from './BottomText';

const FooterWrapper = styled.div`
    background-color: white;
    padding: 70px;
    position: relative;
`;

const Footer = (props) => {
    return (
        <FooterWrapper>
            <BottomText />
        </FooterWrapper>
    );
}

export default Footer;
