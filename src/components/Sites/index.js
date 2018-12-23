import React from 'react';
import styled from 'styled-components';
import QuoteBox from './QuoteBox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import sites1 from '../../resources/images/sites1.jpeg';
import sites2 from '../../resources/images/sites2.jpeg';
import sites3 from '../../resources/images/sites3.jpeg';
import sites4 from '../../resources/images/sites4.jpeg';
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

const SitesTitle = styled.h2`
    font-family: Roboto;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
`;

const Sites = (props) => {

    const { classes } = props;
 
    return (
        <div className={classes.root}>
            <HeadShake>
            <SitesTitle>Sites</SitesTitle>
              <Grid container>
                    <Grid item xs>
                        <QuoteBox title="Forests" image={sites1} />
                    </Grid>
                    <Grid item xs>
                        <QuoteBox title="Islands" image={sites2} />
                    </Grid>
                    <Grid item xs>
                        <QuoteBox title="Seas" image={sites3} />
                    </Grid>
                    <Grid item xs>
                        <QuoteBox title="Mountains" image={sites4} />
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

