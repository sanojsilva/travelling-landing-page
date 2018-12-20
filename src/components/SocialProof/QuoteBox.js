import React, { Component } from 'react';
//import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 300,
    flex: 1,
    margin: '30px !important'
  },
  media: {
    height: 300,
    leftMargin: '10px !important'
  },
};

//const QuoteBoxWrapper = styled.div`
    //text-transform: uppercase;
    //font-weight: bold;
    //flex: 1;
    //font-size: 20px;
    //border: 1px solid black;
    //border-radius: 10px;
    //padding: 20px;
    //padding-bottom: 60px;
    //margin: 10px;
//`;

const QuoteBox = (props) => {

    const { classes } = props;

    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
              </Typography>
              <Typography component="p">
                      Dolor quam sapiente nesciunt reiciendis error! Maxime consequatur vel quam neque adipisci Accusantium .
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
    );
}

QuoteBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuoteBox);
