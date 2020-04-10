import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MuiDrawer from '@material-ui/core/Drawer';
import useStyles from './useStyles';
import ListItemLink from '../ListItemLink';

const Drawer = props => {
  const { open, setOpen } = props;
  const classes = useStyles();
  return (
    <MuiDrawer
      className={classes.drawer}
      open={open}
      onClick={() => setOpen(false)}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader} />
      <Divider />
      <List>
        <ListItemLink to={process.env.ROUTE_ROOT} primary="00 - Building switch" />
        <ListItemLink to={process.env.ROUTE_TOGGLE} primary="01 - Building toggle" />
        <ListItemLink to={process.env.ROUTE_COMPOUND} primary="02 - Compound components" />
      </List>
    </MuiDrawer>
  );
};

Drawer.defaultProps = {
  open: false,
  setOpen: () => {}
};

Drawer.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

export default Drawer;
