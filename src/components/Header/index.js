import React, { Component } from 'react';
import NavBar from './NavBar';
//import styled from 'styled-components';
//import background_image from '../../resources/images/background_image.jpeg';


//const HeaderWrapper = styled.div`
    //margin: 0;
    //padding: 0;
//`;

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
        window.addEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(e) {
        //console.log(window.pageYOffset);
        if (window.pageYOffset > 0) {
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
                <NavBar transparent={this.state.transparent} textColor={this.state.textColor} />
            </div>
        );
    }
}


export default Header;
