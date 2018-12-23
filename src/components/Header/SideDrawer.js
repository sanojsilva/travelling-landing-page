import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -50

        });

        props.onClose(false);
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('hero')}>
                    Home
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('sites')}>
                    Sites
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('about')}>
                    About
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('footer')}>
                    Contact Us
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;


