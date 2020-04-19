import { Component } from 'react';
import PropTypes from 'prop-types';
import callAll from '../../../utils/callAll';

class Toggle extends Component {
  // eslint-disable-next-line react/sort-comp
  static actionTypes = {
    reset: '__toggle_reset__',
    toggle: '__toggle_toggle__'
  };

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

      // remove the action type so it's not set into state
      const { type, ignoreType, ...onlyChanges } = reducedChanges;

      // return null if there are no changes to be made
      // (to avoid unnecessary changes)
      return Object.keys(onlyChanges).length ? onlyChanges : null;
    }, callback);
  };

  // nested destructuring
  toggle = ({ type = Toggle.actionTypes.toggle } = {}) => {
    this.internalSetState(
      prevState => {
        const { on } = prevState;
        return {
          type,
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
    this.internalSetState({ ...this.initialState, type: Toggle.actionTypes.reset }, () => {
      const { props, state } = this;
      props.onReset(state.on);
    });
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
