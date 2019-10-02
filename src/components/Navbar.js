import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import { GithubIcon, LinkedinIcon } from '../assets/icons.js';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PaletteIcon from '@material-ui/icons/Palette';
import ContactlessIcon from '@material-ui/icons/Contactless';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const Navbar = props => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(!isOpen);
  };

  const sideList = () => {
    const listItems = [
      { "text": 'About Me', "icon": <FaceIcon />, "id": "aboutMe" },
      { "text": 'My Skills', "icon": <FitnessCenterIcon />, "id": "mySkills" },
      { "text": 'My Work', "icon": <PaletteIcon />, "id": "myWork" },
      { "text": 'Contact Me', "icon": <ContactlessIcon />, "id": "contactMe" },
    ]

    const scrollTo = (id) => {
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth'
      });
    }

    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <List>
          {listItems.map((object, index) => (
            <ListItem button key={index} onClick={() => scrollTo(object.id)}>
              <ListItemIcon>{object.icon}</ListItemIcon>
              <ListItemText primary={object.text} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={(e) => toggleDrawer(e)}>
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
      <div>
      <SwipeableDrawer
        open={isOpen}
        onClose={(e) => toggleDrawer(e)}
        onOpen={(e) => toggleDrawer(e)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>    </div>
  );
}

export default Navbar;