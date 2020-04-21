import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Switch from '../../molecules/Switch';
import styles from './styles';

const ToggleContext = createContext();

class Toggle extends Component {
  static Consumer = ToggleContext.Consumer;

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

  render() {
    const { children } = this.props;
    const { on } = this.state;
    return (
      <ToggleContext.Provider value={{ on, toggle: this.toggle }}>
        {children}
      </ToggleContext.Provider>
    );
  }
}

Toggle.defaultProps = {
  onToggle: () => {},
  children: null
};

Toggle.propTypes = {
  onToggle: PropTypes.func,
  children: PropTypes.node
};

const Layer1 = () => <Layer2 />;

const Layer2 = () => (
  <Toggle.Consumer>
    {({ on }) => (
      <>
        {on ? 'The button is on' : 'The button is off'}
        <Layer3 />
      </>
    )}
  </Toggle.Consumer>
);

const Layer3 = () => <Layer4 />;

const Layer4 = () => (
  <Toggle.Consumer>{({ on, toggle }) => <Switch on={on} onClick={toggle} />}</Toggle.Consumer>
);

const Usage = props => {
  const { classes } = props;
  const onToggle = on => {
    // eslint-disable-next-line no-console
    console.log('onToggle', on);
  };
  return (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center">
          Provider pattern
        </Typography>
        <Typography variant="body2" align="center">
          Access your data any where in the application tree without having to prop drill
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <Toggle onToggle={onToggle}>
            <Layer1 />
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
