import React, { Component, createContext, forwardRef } from 'react';
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
    const { children } = this.props;
    const ui = typeof children === 'function' ? children(this.state) : children;
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <ToggleContext.Provider value={this.state}>{ui}</ToggleContext.Provider>
    );
  }
}

Toggle.defaultProps = {
  onToggle: () => {},
  children: null
};

Toggle.propTypes = {
  onToggle: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

// eslint-disable-next-line no-shadow
function withToggle(Component) {
  // handle prop namespace clashes by passing context in separate props - toggleContext
  function Wrapper(props, ref) {
    return (
      <Toggle.Consumer>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {toggleContext => <Component ref={ref} toggle={toggleContext} {...props} />}
      </Toggle.Consumer>
    );
  }
  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`;
  // Handle ref props properly using forwardRef
  return forwardRef(Wrapper);
}

const Layer1 = () => <Layer2 />;

const Layer2 = withToggle(({ toggle: { on } }) => (
  <>
    {on ? 'The button is on' : 'The button is off'}
    <Layer3 />
  </>
));

const Layer3 = () => <Layer4 />;

/*
 * Without HOC we need to use <Toggle.Consumer> to access the context
 * <Toggle.Consumer>{({ on, toggle }) => <Switch on={on} onClick={toggle} />}</Toggle.Consumer>
 * */
const Layer4 = withToggle(({ toggle: { on, toggle } }) => <Switch on={on} onClick={toggle} />);

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
          Higher order components
        </Typography>
        <Typography variant="body2" align="center">
          A HOC is a function that accepts anything - component, object, string and returns an
          enhanced component / wrapper component - redux connect, styled component
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
