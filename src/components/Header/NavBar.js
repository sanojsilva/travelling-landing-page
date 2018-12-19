import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Logo from './Logo';

const styles = {
  root: {
    flexGrow: 1,
    margin: '0',
  },
};

const Ul = styled.ul`
    list-style: none;
    display: flex;
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
        border-bottom: 1px solid black;
        transition: 1000ms;
    }
`;

const NavBar = (props) => {
    
    const { classes } = props;

      return (
        <div className={classes.root}>
            <AppBar position="fixed" style={
                {
                    backgroundColor: props.transparent === true ? 'transparent' : 'white',
                    boxShadow: 'none'
                }
            }>
            <Toolbar>
                <Logo />
                <Ul>
                    <Li><A href="#" textColor={props.textColor}>Home</A></Li>
                    <Li><A href="#" textColor={props.textColor}>Highlights</A></Li>
                    <Li><A href="#" textColor={props.textColor}>Agenda</A></Li>
                    <Li><A href="#" textColor={props.textColor}>About</A></Li>
                    <Li><A href="#" textColor={props.textColor}>Contact Us</A></Li>
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
