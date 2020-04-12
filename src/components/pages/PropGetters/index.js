import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '../../molecules/Switch';
import styles from './styles';
import callAll from '../../../utils/callAll';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  toggle = () => {
    this.setState(
      prevState => {
        const { on } = prevState;
        return {
          on: !on
        };
      },
      () => {
        const { props, state } = this;
        props.onToggle(state.on);
      }
    );
  };

  getTogglerProps = (props = {}) => {
    const { onClick, ...rest } = props;
    const {
      state: { on },
      toggle
    } = this;
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, toggle),
      ...rest
    };
  };

  getStateAndHelpers = () => {
    const {
      state: { on },
      toggle,
      getTogglerProps
    } = this;
    return {
      on,
      toggle, // optional
      getTogglerProps
    };
  };

  render() {
    const {
      props: { children },
      getStateAndHelpers
    } = this;
    return children(getStateAndHelpers());
  }
}

Toggle.defaultProps = {
  onToggle: () => {}
};

Toggle.propTypes = {
  onToggle: PropTypes.func,
  children: PropTypes.func.isRequired
};

const Usage = props => {
  const { classes } = props;
  const onToggle = on => {
    // eslint-disable-next-line no-console
    console.log('onToggle', on);
  };
  const onButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log('onButtonClick');
  };
  return (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center" paragraph>
          Prop getters
        </Typography>
        <Typography variant="body2" align="center">
          Compose relevant props by hiding implementation details and avoid overriding name clash -
          onClick, classNames
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Paper className={classes.paper}>
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Toggle onToggle={onToggle}>
            {({ on, getTogglerProps }) => (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                my={8}
              >
                {on ? 'The button is on' : 'The button is off'}
                <Switch {...getTogglerProps({ on })} />
                <Box mt={4}>
                  <Button
                    {...getTogglerProps({
                      'aria-label': 'custom-button',
                      variant: 'outlined',
                      color: 'primary',
                      onClick: onButtonClick,
                      id: 'custom-button-id'
                    })}
                  >
                    {on ? 'on' : 'off'}
                  </Button>
                </Box>
              </Box>
            )}
          </Toggle>
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
