import React from 'react';
//import styled from 'styled-components';
import QuoteBox from './QuoteBox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import social_proof1 from '../../resources/images/social_proof1.jpeg';
import social_proof2 from '../../resources/images/social_proof2.jpeg';
import social_proof3 from '../../resources/images/social_proof3.jpeg';
import social_proof4 from '../../resources/images/social_proof4.jpeg';
import HeadShake from 'react-reveal/HeadShake';
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

const Sites = (props) => {

    const { classes } = props;
 
    return (
        <div className={classes.root}>
            <HeadShake>
              <Grid container spacing={24}>
                    <Grid item xs>
                        <QuoteBox title="Forests" image={social_proof1} />
                    </Grid>
                    <Grid item xs>
                        <QuoteBox title="Islands" image={social_proof2} />
                    </Grid>
                    <Grid item xs>
                        <QuoteBox title="Seas" image={social_proof3} />
                    </Grid>
                    <Grid item xs>
                        <QuoteBox title="Mountains" image={social_proof4} />
                    </Grid>
              </Grid>
            </HeadShake>
        </div>
    );
}


Sites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sites);

