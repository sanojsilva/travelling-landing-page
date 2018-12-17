import React, { Component } from 'react';
import NavBar from './NavBar';
import MidSection from './MidSection';
import styled from 'styled-components';
import background_image from '../../resources/images/background_image.jpeg';


const HeaderWrapper = styled.div`
    background-image: url(${background_image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-shadow: border-box;
`;

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transparent: true,
            textColor: 'white'
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(e) {
        if (e.pageY > 0) {
            this.setState({
                transparent: false,
                textColor: 'black'
            });
        } else {
            this.setState({
                transparent: true,
                textColor: 'white'
            });
        }
    }

    render() {

        return (
            <div>
            <HeaderWrapper>
                <NavBar transparent={this.state.transparent} textColor={this.state.textColor} />
                <MidSection />
            </HeaderWrapper>
            test
            </div>
        );
    }
}


export default Header;
