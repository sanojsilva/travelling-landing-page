import React, { Component } from 'react';
import styled from 'styled-components';
import QuoteBox from './QuoteBox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import social_proof1 from '../../resources/images/social_proof1.jpeg';
import social_proof2 from '../../resources/images/social_proof2.jpeg';
import social_proof3 from '../../resources/images/social_proof3.jpeg';
import social_proof4 from '../../resources/images/social_proof4.jpeg';
//const SocialProofWrapper = styled.div`
    //display: flex;
    //flex-wrap: wrap;
    //justify-content: space-between;
//`;
//
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const SocialProof = (props) => {

    const { classes } = props;
 
    return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs>
                <QuoteBox title="Jungle" image={social_proof1} />
            </Grid>
            <Grid item xs>
                <QuoteBox title="Island" image={social_proof2} />
            </Grid>
            <Grid item xs>
                <QuoteBox title="Ocean" image={social_proof3} />
            </Grid>
            <Grid item xs>
                <QuoteBox title="Mountain" image={social_proof4} />
            </Grid>
          </Grid>
        </div>
    );
}


SocialProof.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialProof);

