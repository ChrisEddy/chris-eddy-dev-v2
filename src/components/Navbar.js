import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import { GithubIcon, LinkedinIcon } from '../assets/icons.js';
import NavDrawer from './NavDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const Navbar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Chris Eddy
          </Typography>
          <a href="https://github.com/ChrisEddy" target="_blank" rel="noopener noreferrer"> 
            <IconButton aria-label="Github">
                <SvgIcon>
                {GithubIcon}
                </SvgIcon>
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/chris-eddy-394784160/" target="_blank" rel="noopener noreferrer"> 
            <IconButton aria-label="Github">
                <SvgIcon>
                {LinkedinIcon}
                </SvgIcon>
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
      <NavDrawer open={false}/>
    </div>
  );
}

export default Navbar;