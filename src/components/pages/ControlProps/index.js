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
    this.state = { on: false };
  }

  getState() {
    const { props, state } = this;
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
    const { onToggle } = this.props;
    if (this.isControlled('on')) {
      onToggle(!this.getState().on);
    } else {
      this.setState(
        prevState => {
          const { on } = prevState;
          return {
            on: !on
          };
        },
        () => {
          onToggle(this.getState().on);
        }
      );
    }
  };

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
  onToggle: () => {}
};

Toggle.propTypes = {
  on: PropTypes.bool,
  onToggle: PropTypes.func
};

const Usage = props => {
  const { classes } = props;
  const [bothOn, setBothOn] = useState(false);
  const onToggle = on => {
    setBothOn(on);
    // eslint-disable-next-line no-console
    console.log('onToggle', on);
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
          <Toggle on={bothOn} onToggle={onToggle} />
          <Toggle on={bothOn} onToggle={onToggle} />
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
