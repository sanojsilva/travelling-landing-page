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
            textColor: 'white',
            borderBottom: false,
            showDrawer: false,
            drawerOpen: false
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    toggleDrawer(value) {
        this.setState({
            drawerOpen: value
        });
    }
    
    handleScroll(e) {
        //console.log(window.pageYOffset);
        if (window.pageYOffset > 0) {
            this.setState({
                transparent: false,
                textColor: 'black',
                borderBottom: true
            });
        } else {
            this.setState({
                transparent: true,
                textColor: 'white',
                borderBottom: false
            });
        }
    }

    handleResize(e) {
        if (window.innerWidth < 750) {
            this.setState({
                showDrawer: true
            });
        } else {
            this.setState({
                showDrawer: false,
                drawerOpen: false
            });
        }
    }

    render() {

        return (
            <div>
                <NavBar transparent={this.state.transparent} textColor={this.state.textColor} borderBottom={this.state.borderBottom} toggleDrawer={this.toggleDrawer} showDrawer={this.state.showDrawer} drawerOpen={this.state.drawerOpen} />
            </div>
        );
    }
}


export default Header;
