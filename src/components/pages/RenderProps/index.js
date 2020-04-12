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
    // eslint-disable-next-line react/no-unused-state
    this.state = { on: false, toggle: this.toggle };
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

  render() {
    const {
      state,
      props: { children }
    } = this;
    return children(state);
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
          Render Props
        </Typography>
        <Typography variant="body2" align="center">
          Dynamic composition at render phase. More control over what is rendered and how its
          rendered.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Paper className={classes.paper}>
          <Toggle onToggle={onToggle}>
            {({ on, toggle }) => (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                my={8}
              >
                {on ? 'The button is on' : 'The button is off'}
                <Switch on={on} onClick={toggle} />
                <Box my={4}>
                  <Button
                    aria-label="custom-button"
                    onClick={toggle}
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
