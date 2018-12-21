import React from 'react';
import styled from 'styled-components';


const LogoWrapper = styled.div`
    font-size: 2rem;
    color: white;
    padding-top: 2px;
`;

const FirstLetter = styled.span`
    font-size: 3rem;
    color: tomato;
    font-weight: bold;
`;

const Logo = (props) => {
    return (
        <LogoWrapper>
            <FirstLetter>T</FirstLetter>ravel
        </LogoWrapper>
    );
}

export default Logo;
