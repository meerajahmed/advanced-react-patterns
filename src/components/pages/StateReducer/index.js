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
import Toggle from './Toggle';

class Usage extends Component {
  constructor(props) {
    super(props);
    this.initialState = { timesClicked: 0 };
    this.state = this.initialState;
  }

  toggleStateReducer = (state, changes) => {
    const { timesClicked } = this.state;
    if (timesClicked > 3) {
      return { ...changes, on: false };
    }
    return changes;
  };

  onToggle = on => {
    this.setState(({ timesClicked }) => ({
      timesClicked: timesClicked + 1
    }));
    // eslint-disable-next-line no-console
    console.log('onToggle', on);
  };

  onReset = on => {
    this.setState(this.initialState);
    // eslint-disable-next-line no-console
    console.log('onReset', on);
  };

  render() {
    const { classes } = this.props;
    const { timesClicked } = this.state;
    return (
      <Container>
        <Box my={8}>
          <Typography variant="h4" align="center" paragraph>
            State reducer
          </Typography>
          <Typography variant="body2" align="center">
            Making your component&#39;s opinion overridable - more flexible. It allow users to be in
            control over logic based on actions.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Paper className={classes.paper}>
            {/* eslint-disable react/jsx-props-no-spreading */}
            <Toggle
              stateReducer={this.toggleStateReducer}
              onToggle={this.onToggle}
              onReset={this.onReset}
            >
              {({ on, reset, getTogglerProps }) => (
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  my={8}
                >
                  {timesClicked > 3 ? (
                    <Typography variant="body2" align="center">
                      Whoa, you clicked too much!
                    </Typography>
                  ) : (
                    <Typography variant="body2" align="center">
                      {`Click count: ${timesClicked}`}
                    </Typography>
                  )}
                  <Switch {...getTogglerProps({ on })} />
                  <Box mt={4}>
                    <Button variant="outlined" color="primary" onClick={reset}>
                      Reset
                    </Button>
                  </Box>
                </Box>
              )}
            </Toggle>
          </Paper>
        </Box>
      </Container>
    );
  }
}

Usage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Usage);
