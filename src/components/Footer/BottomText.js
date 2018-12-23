import React from 'react';
import styled from 'styled-components';


const BottomTextWrapper = styled.div`
    color: white;
    text-align: center;
    font-size: 15px;
    padding-bottom: 0px;
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%);
    font-weight: bold;
`;

const BottomText = (props) => {
    return (
        <BottomTextWrapper>
            Copy Rights Reserved 2018 
            <br />
            Created And Designed By Sanoj Silva
        </BottomTextWrapper>
    );
}

export default BottomText;
