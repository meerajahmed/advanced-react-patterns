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
        <ListItemLink to={process.env.ROUTE_ROOT} primary="0.0 - Building switch" />
        <ListItemLink to={process.env.ROUTE_TOGGLE} primary="1.0 - Building toggle" />
        <ListItemLink to={process.env.ROUTE_COMPOUND} primary="2.0 - Compound components" />
        <ListItemLink to={process.env.ROUTE_COMPOUND_1} primary="2.1 - Compound components" />
        <ListItemLink
          to={process.env.ROUTE_FLEXIBLE_COMPOUND}
          primary="3.0 - Flexible compound components"
        />
        <ListItemLink
          to={process.env.ROUTE_FLEXIBLE_COMPOUND_1}
          primary="3.1 - Flexible compound components"
        />
        <ListItemLink to={process.env.ROUTE_RENDER_PROPS} primary="4.0 - Render props" />
        <ListItemLink to={process.env.ROUTE_PROP_COLLECTIONS} primary="5.0 - Prop collections" />
        <ListItemLink to={process.env.ROUTE_PROP_GETTERS} primary="6.0 - Prop getters" />
        <ListItemLink to={process.env.ROUTE_STATE_INITIALIZER} primary="7.0 - State initializer" />
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
