import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Me from '../assets/me.jpg';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import {isMobile} from '../enviroment'

const useStyles = makeStyles({
  topSpacer: {
    marginTop: isMobile ? '18vh' : '26vh'
  },
  bigAvatar: {
    width: 200,
    height: 200,
    margin: '0 auto'
  },
  name: {
    textAlign: 'center',
    marginTop: 10
  },
  downArrowButton: {
    margin: '0 auto',
  },
  downArrow: {
    fontSize: 50
  },
  alignCenter: {
    textAlign: 'center'
  },
  container: {
    height: '100%',
    position: 'absolute'
  }
});

const LandingSection = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <div className={classes.topSpacer}></div>
        <Avatar alt="Chris Eddy" src={Me} className={classes.bigAvatar}/>
        <Typography variant="h2" className={classes.name}>
          Chris Eddy
        </Typography>     
        <Typography variant="h5" className={classes.name}>
          Web Developer
        </Typography>    
        <Typography variant="subtitle1" className={classes.name}>
          Vancouver, BC, Canada
        </Typography>    
      </Grid>
      <Grid item xs={12} className={classes.alignCenter}>
        <IconButton edge="start" className={classes.downArrowButton} color="inherit" aria-label="menu" size="small">
          <KeyboardArrowDownIcon className={classes.downArrow}/>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default LandingSection;