import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const Switch = props => {
  const { classes, on, onClick } = props;
  return (
    <label htmlFor="toggle" aria-label="toggle" className={classes.root}>
      <input id="toggle" className={classes.input} onClick={onClick} type="checkbox" />
      <span className={clsx(classes.switch, { [classes.switchOn]: on })} />
    </label>
  );
};

Switch.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Switch);
