import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Switch from '../../molecules/Switch';
import styles from './styles';
import isNullOrUndefined from '../../../utils/isNullOrUndefined';

class Toggle extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { on: false };
  }

  getState(state = this.state) {
    const { props } = this;
    /*
     * Make the `getState` function generic enough to support all state in
     * `this.state` even if we add any number of properties to state.
     * */
    return Object.entries(state).reduce((combinedState, [key, value]) => {
      if (this.isControlled(key)) {
        return {
          ...combinedState,
          [key]: props[key]
        };
      }
      return {
        ...combinedState,
        [key]: value
      };
    }, {});
  }

  toggle = () => {
    this.internalSetState(({ on }) => ({ on: !on }));
  };

  internalSetState(changes, callback) {
    const { onStateChange } = this.props;
    let allChanges = {};
    this.setState(
      state => {
        const combinedState = this.getState(state);
        const changesObject = typeof changes === 'function' ? changes(combinedState) : changes;
        allChanges = changesObject;
        // find only state changes
        const nonControlledChanges = Object.entries(changesObject).reduce(
          (newChanges, [key, value]) => {
            if (!this.isControlled(key)) {
              return {
                ...newChanges,
                [key]: value
              };
            }
            return newChanges;
          },
          {}
        );
        return Object.keys(nonControlledChanges).length ? nonControlledChanges : null;
      },
      () => {
        onStateChange(allChanges);
        // eslint-disable-next-line no-unused-expressions
        callback && callback();
      }
    );
  }

  isControlled(prop) {
    const { [prop]: controlledProp } = this.props;
    return !isNullOrUndefined(controlledProp);
  }

  render() {
    return <Switch on={this.getState().on} onClick={this.toggle} />;
  }
}

Toggle.defaultProps = {
  on: null,
  onStateChange: () => {}
};

Toggle.propTypes = {
  on: PropTypes.bool,
  onStateChange: PropTypes.func
};

const Usage = props => {
  const { classes } = props;
  const [bothOn, setBothOn] = useState(false);
  const onStateChange = changes => {
    // eslint-disable-next-line no-prototype-builtins
    if (changes.hasOwnProperty('on')) {
      setBothOn(changes.on);
    }
    // eslint-disable-next-line no-console
    console.log('onStateChange', changes);
  };
  return (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center">
          Controll props
        </Typography>
        <Typography variant="body2" align="center">
          User controls the state of Toggle by providing state from props and Toggle component
          provides a mechanism to suggest changes to that state
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <Toggle on={bothOn} onStateChange={onStateChange} />
          <Toggle on={bothOn} onStateChange={onStateChange} />
        </Paper>
      </Box>
    </Container>
  );
};

Usage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Usage);
