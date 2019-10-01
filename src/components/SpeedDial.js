import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ContactIcon from '@material-ui/icons/Contactless';

const useStyles = makeStyles(theme => ({
  root: {
    height: '93%',
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <PhoneIcon />, name: 'Call', link: "tel:6047640869" },
  { icon: <EmailIcon />, name: 'Email', link: "mailto:chris.eddy.dev@gmail.com" }
];

const ActionsSpeedDial = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (action) => {
    window.location = action.link;
  }

  return (
    <div className={classes.root}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Contact Me"
        className={classes.speedDial}
        hidden={false}
        icon={<ContactIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
            <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleClick(action)}
            />
        ))}
      </SpeedDial>
    </div>
  );
}

export default ActionsSpeedDial;