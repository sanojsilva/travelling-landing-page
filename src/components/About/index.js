import React, { Component } from 'react';
import styled from 'styled-components';
import Block from './Block';
import about_background from '../../resources/images/about_background.jpeg';
import Zoom from 'react-reveal/Zoom';
import Grid from '@material-ui/core/Grid';

const AboutWrapper = styled.div`
    padding: ${props => props.wrapperPadding};
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5)), url(${about_background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wrapperPadding: '30px',
            blockPadding: '50px' 
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    handleResize(e) {
        if (window.innerWidth < 750) {
            this.setState({
                wrapperPadding: '30px',
                blockPadding: '20px'
            });
        } else {
            this.setState({
                wrapperPadding: '50px',
                blockPadding: '100px'
            });
        }
    }

    render(){
        return (
            <AboutWrapper padding={this.state.wrapperPadding}> 
                <Grid container>
                    <Grid item xs>
                        <Zoom>
                            <Block title="Join Us" padding={this.state.blockPadding} />
                        </Zoom>
                    </Grid>
                    <Grid item xs>
                        <Zoom>
                            <Block title="Explore The World"  padding={this.state.blockPadding} />
                        </Zoom>
                    </Grid>
                    <Grid item xs>
                        <Zoom>
                            <Block title="We Help You Travel" padding={this.state.blockPadding} />
                        </Zoom>
                    </Grid>
                </Grid>
            </AboutWrapper>
        );
    }
}

export default About;
