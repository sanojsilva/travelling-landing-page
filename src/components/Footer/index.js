import React from 'react';
import styled from 'styled-components';
import BottomText from './BottomText';

const FooterWrapper = styled.div`
    background-color: #989da5;
    padding: 70px;
    position: relative;
    border-top: 3px solid tomato;
`;

const Footer = (props) => {
    return (
        <FooterWrapper>
            <BottomText />
        </FooterWrapper>
    );
}

export default Footer;
