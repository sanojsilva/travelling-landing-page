import React from 'react';
import styled from 'styled-components';


const BlockWrapper = styled.div`
    text-align: center;
    font-weight: bold;
    font-family: Roboto;
    border: 2px solid white;
    padding: ${props => props.padding};
    border-radius: 100px;
    border-top: none;
    border-bottom: none;
    margin: 10px;
    color: white;
    font-size: 20px;
    box-sizing: border-box;
`;

const SmallTextWrapper = styled.div`
    font-weight: normal;
    font-size: 12px;

`;


const Block = (props) => {
    return (
        <BlockWrapper padding={props.padding}> 
            {props.title}
                <SmallTextWrapper>
                    Dolor dignissimos minus dicta laboriosam accusantium Eum nulla vitae sapiente rerum suscipit? Atque am eserunt
                </SmallTextWrapper>
        </BlockWrapper>
    );
}

export default Block;
