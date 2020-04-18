import { Component } from 'react';
import PropTypes from 'prop-types';
import callAll from '../../../utils/callAll';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.initialState = { on: props.initialOn };
    this.state = this.initialState;
  }

  internalSetState = (changes, callback) => {
    this.setState(state => {
      // handle  function setState call
      const changesObject = typeof changes === 'function' ? changes(state) : changes;

      // apply state reducer
      const { stateReducer } = this.props;
      const reducedChanges = stateReducer(state, changesObject) || {};

      // return null if there are no changes to be made
      // (to avoid unnecessary changes)
      return Object.keys(reducedChanges).length ? reducedChanges : null;
    }, callback);
  };

  toggle = () => {
    this.internalSetState(
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

  reset = () => {
    this.internalSetState(
      () => this.initialState,
      () => {
        const { props, state } = this;
        props.onReset(state.on);
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
      reset,
      getTogglerProps
    } = this;
    return {
      on,
      toggle, // optional,
      reset,
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
  initialOn: false,
  onToggle: () => {},
  onReset: () => {},
  stateReducer: (state, changes) => changes
};

Toggle.propTypes = {
  initialOn: PropTypes.bool,
  onToggle: PropTypes.func,
  onReset: PropTypes.func,
  stateReducer: PropTypes.func,
  children: PropTypes.func.isRequired
};

export default Toggle;
