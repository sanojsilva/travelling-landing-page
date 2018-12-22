import React from 'react';
import styled from 'styled-components';
import Block from './Block';
import about_background from '../../resources/images/about_background.jpeg';
import Zoom from 'react-reveal/Zoom';
import Grid from '@material-ui/core/Grid';

const AboutWrapper = styled.div`
    padding: 50px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5)), url(${about_background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;


const About = (props) => {
    return (
        <AboutWrapper> 
            <Grid container>
                <Grid item xs>
                    <Zoom>
                        <Block title="Join Us" />
                    </Zoom>
                </Grid>
                <Grid item xs>
                    <Zoom>
                        <Block title="Explore The World" />
                    </Zoom>
                </Grid>
                <Grid item xs>
                    <Zoom>
                        <Block title="We Help You Travel" />
                    </Zoom>
                </Grid>
            </Grid>
        </AboutWrapper>
    );
}

export default About;
