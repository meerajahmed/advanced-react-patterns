import React, { cloneElement, Children, Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Switch from '../../molecules/Switch';
import styles from './styles';

class Toggle extends Component {
  // static properties won't have access to toggle instance - 'this'
  static On = props => (props.on ? props.children : null);

  static Off = props => (props.on ? null : props.children);

  static Button = props => <Switch on={props.on} onClick={props.toggle} />;

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
    const {
      state: { on },
      toggle,
      props: { children }
    } = this;
    return Children.map(children, childElement =>
      cloneElement(childElement, {
        on,
        toggle
      })
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
          Compound Components
        </Typography>
        <Typography variant="body2" align="center">
          Share implicit state among related components
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <Toggle onToggle={onToggle}>
            <Toggle.On>The button is on</Toggle.On>
            <Toggle.Off>The button is off</Toggle.Off>
            <Toggle.Button />
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
