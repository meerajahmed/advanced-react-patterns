import React, { Component, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Switch from '../../molecules/Switch';
import styles from './styles';
import isNullOrUndefined from '../../../utils/isNullOrUndefined';

class Toggle extends Component {
  /*
   * Add support for a `type` in the changes so consumers can differentiate the different state updates
   * */

  // eslint-disable-next-line react/sort-comp
  static actionTypes = {
    toggle: '__toggle__',
    toggleOn: '__toggle_on__',
    toggleOff: '__toggle_off__'
  };

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

  // changes -> change proposal will also have type details
  internalSetState(changes, callback) {
    const { onStateChange } = this.props;
    let allChanges = {};
    this.setState(
      state => {
        const combinedState = this.getState(state);
        const changesObject = typeof changes === 'function' ? changes(combinedState) : changes;
        allChanges = changesObject;
        const { type: ignoredType, ...onlyChanges } = changesObject;

        // filter only state changes
        const nonControlledChanges = Object.entries(onlyChanges).reduce(
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
        // send all sate changes including type information and current state
        onStateChange(allChanges, this.getState());
        // eslint-disable-next-line no-unused-expressions
        callback && callback();
      }
    );
  }

  isControlled(prop) {
    const { [prop]: controlledProp } = this.props;
    return !isNullOrUndefined(controlledProp);
  }

  toggle = ({ on: newState, type = Toggle.actionTypes.toggle } = {}) => {
    this.internalSetState(({ on }) => ({
      on: typeof newState === 'boolean' ? newState : !on,
      type
    }));
  };

  handleSwitchClick = () => {
    this.toggle();
  };

  handleOffClick = () => this.toggle({ on: false, type: Toggle.actionTypes.toggleOff });

  handleOnClick = () => this.toggle({ on: true, type: Toggle.actionTypes.toggleOn });

  render() {
    return (
      <>
        <Switch on={this.getState().on} onClick={this.handleSwitchClick} />
        <Box display="flex" justifyContent="center" my={4}>
          <ButtonGroup color="primary" aria-label="Toggle button">
            <Button onClick={this.handleOffClick}>off</Button>
            <Button onClick={this.handleOnClick}>on</Button>
          </ButtonGroup>
        </Box>
      </>
    );
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
  const lastWasButton = useRef(false);
  const onStateChange = (changes, currState) => {
    const isButtonChange =
      changes.type === Toggle.actionTypes.toggleOn || changes.type === Toggle.actionTypes.toggleOff;

    if (changes.type === Toggle.actionTypes.toggle || (lastWasButton.current && isButtonChange)) {
      setBothOn(changes.on);
      lastWasButton.current = false;
    } else {
      lastWasButton.current = true;
    }

    // eslint-disable-next-line no-console
    console.log('onStateChange', changes, currState);
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
