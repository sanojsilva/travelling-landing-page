import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Logo from './Logo';
import SideDrawer from './SideDrawer';
import { scroller } from 'react-scroll';

const styles = {
  root: {
    flexGrow: 1,
    margin: '0',
  },
};

const Ul = styled.ul`
    list-style: none;
    display: ${props => props.display === true ? 'flex' : 'none'};
`;

const Li = styled.li`
    padding: 15px;
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 23px;
`;

const A = styled.a`
    font-weight: bold;
    font-family: 'Roboto';
    color: ${props => props.textColor};
    text-decoration: none;
    &:hover {
        border-bottom: 1px solid tomato;
        transition: 500ms;
        color: tomato;
    }
`;

const NavBar = (props) => {
    
    const { classes } = props;

    const scrollToElement = (element, event) => {

        event.preventDefault();
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -100

        });

        props.toggleDrawer(false);
    }

      return (
        <div className={classes.root}>
            <AppBar position="fixed" style={
                {
                    backgroundColor: props.transparent === true ? 'transparent' : 'white',
                    boxShadow: 'none',
                    borderBottom: props.borderBottom === true ? '3px solid tomato' : ''
                }
            }>
            <Toolbar>
                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=> props.toggleDrawer(true)}
                    style={{
                        display: props.showDrawer === true ? 'block' : 'none',
                        color: props.textColor
                    }}
                >
                    <MenuIcon/>
                </IconButton> 

                <SideDrawer
                    open={props.drawerOpen}
                    onClose={(value)=> props.toggleDrawer(value)}
                />
                <Logo textColor={props.textColor} />
                <Ul display={!props.showDrawer}>
                    <Li>
                        <A href="#" textColor={props.textColor} onClick={(e) => scrollToElement('hero', e)} >Home</A>
                    </Li>
                    <Li>
                        <A href="#" textColor={props.textColor} onClick={(e) => scrollToElement('highlights', e)}>Highlights</A>
                    </Li>
                    <Li>
                        <A href="#" textColor={props.textColor} onClick={(e) => scrollToElement('sites', e)}>Sites</A>
                    </Li>
                    <Li>
                        <A href="#" textColor={props.textColor} onClick={(e) => scrollToElement('about', e)}>About</A>
                    </Li>
                    <Li>
                        <A href="#" textColor={props.textColor} onClick={(e) => scrollToElement('footer', e)}>Contact Us</A>
                    </Li>
                </Ul>
            </Toolbar>
          </AppBar>
        </div>
      );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
