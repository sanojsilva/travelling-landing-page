import React from 'react';
import styled from 'styled-components';

const TopTextWrapper = styled.div`
    font-size: 40px;
    text-align: center;
    padding: 10px;
`;

const TopText = (props) => {

    return(
        <TopTextWrapper>
            {props.text}
        </TopTextWrapper>
    );
}


export default TopText;
