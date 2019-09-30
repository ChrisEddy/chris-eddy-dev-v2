import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Me from '../assets/me.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  topSpacer: {
    marginTop: '26vh'
  },
  bigAvatar: {
    width: 200,
    height: 200,
    margin: '0 auto'
  },
  name: {
    textAlign: 'center',
    marginTop: 10
  }
});

const LandingSection = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.topSpacer}></div>
        <Avatar alt="Remy Sharp" src={Me} className={classes.bigAvatar} boxShadow={3}/>
      </Grid>
      <Grid item xs={12}>
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
    </Grid>
  );
}

export default LandingSection;