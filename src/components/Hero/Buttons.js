import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ButtonsWrapper = styled.div`
    display: flex;
`;

const Buttons = (props) => {

    return(
        <ButtonsWrapper>
            <Button size="medium" variant="outlined" style={{flex: '1', margin: '10px', 'backgroundColor': 'tomato', color: 'white', border: '1px solid white'}}>
                Learn More
            </Button>
            <Button size="medium" variant="outlined" style={{flex: '1', margin: '10px', color: 'white', border: '1px solid white'}}>
                View Places
            </Button>
        </ButtonsWrapper>
    );
}


export default Buttons;
