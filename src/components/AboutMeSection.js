import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {

  },
  container: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: theme.primary
  },
  body: {
    fontSize: '1.1rem'
  }
}));

const AboutMeSection = props => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="aboutMe">
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.container}>
            <Typography variant="h3" className={classes.heading}>
              About Me
            </Typography>    
            <br/>
            <Divider light={true}/>
            <br/>
            <Typography variant="body1" className={classes.body}>
            I first got into programming about 3 years ago, doing some basic Python stuff. I had fun with learning programming and decided to take it further as a career. I went on to study at Camosun College in Information and Computer Systems.
            <br/>
            I am proudly born and raised in British Columbia. My hobbies include, hiking, climbing, reading and biking.
            <br/>
            My passion for coding revolves around full-stack web development. I enjoy making things work and bringing everything together. If I had to lean to one side, I'd lean towards frontend.
            </Typography>   
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMeSection;