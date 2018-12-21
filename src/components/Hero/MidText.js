import React from 'react';
import styled from 'styled-components';

const MidTextWrapper = styled.div`
    font-size: 15px;
    padding-bottom: 20px;
`;

const MidText = (props) => {

    return(
        <MidTextWrapper>
            {props.text}
        </MidTextWrapper>
    );
}


export default MidText;
