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

  getStateAndHelpers = () => {
    const {
      state: { on },
      toggle
    } = this;
    return {
      on,
      toggle, // optional
      togglerProps: {
        'aria-pressed': on,
        onClick: toggle
      }
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
  return (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center" paragraph>
          Prop collections
        </Typography>
        <Typography variant="body2" align="center">
          Few component usage may require certain pros to be applied on certain element to make
          things work. It is useful because you don’t have to know the common props that needs to be
          applied to relevant elements.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Paper className={classes.paper}>
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Toggle onToggle={onToggle}>
            {({ on, togglerProps }) => (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                my={8}
              >
                {on ? 'The button is on' : 'The button is off'}
                <Switch {...togglerProps} on={on} />
                <Box mt={4}>
                  <Button
                    {...togglerProps}
                    aria-label="custom-button"
                    variant="outlined"
                    color="primary"
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
