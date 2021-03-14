import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
// imperative impl

const STATE_DEFAULT = 1;
const STATE_LEFT_SIDE = 2;
const STATE_RIGHT_SIDE = 3;
const handleSize = 20;

const noop = () => {};

// eslint-disable-next-line react/prefer-stateless-function
class SwipeButton extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = createRef();
    this.rafPending = false;
    this.initialTouchPos = null;
    this.lastTouchPos = null;
    // for css transform
    this.currentXPosition = 0;

    this.currentState = STATE_DEFAULT;
  }

  componentDidMount() {
    const node = this.buttonRef.current;
    /* Perform client width here as this can be expensive and
    does'nt change window resize */
    this.buttonWidth = node.clientWidth;
    this.slopValue = this.buttonWidth * (1 / 4);

    /* 1. Add event listeners  */
    // Check if pointer events are supported
    if (window.PointerEvent) {
      node.addEventListener('pointerdown', this.handleGestureStart, true);
      node.addEventListener('pointermove', this.handleGestureMove, true);
      node.addEventListener('pointerup', this.handleGestureEnd, true);
      node.addEventListener('pointercancel', this.handleGestureEnd, true);
    } else {
      // Add touch listeners
      node.addEventListener('touchstart', this.handleGestureStart, true);
      node.addEventListener('touchmove', this.handleGestureMove, true);
      node.addEventListener('touchend', this.handleGestureEnd, true);
      node.addEventListener('touchcancel', this.handleGestureEnd, true);

      // Mouse events will only trigger when the cursor is hovering over the element the event listener is added to
      node.addEventListener('mousedown', this.handleGestureStart, true);
    }

    /* Safari on iOS does not apply the active state by default */
    if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
      node.addEventListener('touchstart', noop, false);
    }
  }

  handleGestureStart = event => {
    const node = this.buttonRef.current;
    if (window.PointerEvent) {
      event.target.setPointerCapture(event.pointerId);
    } else {
      // all mouse events are received regardless of whether the event occurs on the original element or not
      document.addEventListener('mousemove', this.handleGestureMove, true);
      document.addEventListener('mouseup', this.handleGestureEnd, true);
    }

    this.initialTouchPos = this.getGesturePointFromEvent(event);
    // start with browser default value
    node.style.transition = 'initial';
  };

  handleGestureEnd = event => {
    this.rafPending = false;
    if (window.PointerEvent) {
      // releases the pointer capture
      event.target.releasePointerCapture(event.pointerId);
    } else {
      // Remove the mouse move and end listeners from the document and end the gesture
      document.removeEventListener('mousemove', this.handleGestureMove, true);
      document.removeEventListener('mouseup', this.handleGestureEnd, true);
    }
    this.updateSwipeResetPosition();
    this.initialTouchPos = null;
  };

  handleGestureMove = event => {
    if (!this.initialTouchPos) {
      return;
    }
    this.lastTouchPos = this.getGesturePointFromEvent(event);
    if (this.rafPending) {
      return;
    }
    this.rafPending = true;
    //  call onAnimFrame just before browser is about to paint any changes to the page
    window.requestAnimationFrame(this.onAnimFrame);
  };

  getGesturePointFromEvent = event => {
    const point = {};
    if (event.targetTouches) {
      point.x = event.targetTouches[0].clientX;
      point.y = event.targetTouches[0].clientY;
    } else {
      point.x = event.clientX;
      point.y = event.clientY;
    }
    return point;
  };

  onAnimFrame = () => {
    if (!this.rafPending) {
      // onAnimFrame has been called by rAF since last move
      // this is to make sure we have only 1 rAF waiting to run at any one time
      return;
    }

    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x;
    // calculate new css transform position
    const newXTransform = `${this.currentXPosition - differenceInX}px`;
    //  a CSS animation using the transform property looks much smoother than one using the left and top properties
    const transformStyle = `translateX(${newXTransform})`;
    this.setTransformStyle(transformStyle);

    this.rafPending = false;
    // allow the next touch event to request a new animation frame
  };

  setTransformStyle = transformStyle => {
    const node = this.buttonRef.current;
    node.style.webkitTransform = transformStyle;
    node.style.MozTransition = transformStyle;
    node.style.msTransform = transformStyle;
    node.style.transform = transformStyle;
  };

  updateSwipeResetPosition = () => {
    const node = this.buttonRef.current;
    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x;
    this.currentXPosition -= differenceInX;

    // Go to the default state and change
    let newState = STATE_DEFAULT;

    // Check if we need to change state to left or right based on slop value
    if (Math.abs(differenceInX) > this.slopValue) {
      if (this.currentState === STATE_DEFAULT) {
        if (differenceInX > 0) {
          newState = STATE_LEFT_SIDE;
        } else {
          newState = STATE_RIGHT_SIDE;
        }
      } else if (this.currentState === STATE_LEFT_SIDE && differenceInX > 0) {
        newState = STATE_DEFAULT;
      } else if (this.currentState === STATE_RIGHT_SIDE && differenceInX < 0) {
        newState = STATE_DEFAULT;
      }
    } else {
      newState = this.currentState;
    }
    this.changeState(newState);
    node.style.transition = 'all 150ms ease-out';
  };

  changeState = newState => {
    // eslint-disable-next-line default-case
    switch (newState) {
      case STATE_DEFAULT:
        this.currentXPosition = 0;
        break;
      case STATE_LEFT_SIDE:
        this.currentXPosition = -(this.buttonWidth - handleSize);
        break;
      case STATE_RIGHT_SIDE:
        this.currentXPosition = this.buttonWidth - handleSize;
        break;
    }
    const transformStyle = `translateX(${this.currentXPosition}px)`;
    this.setTransformStyle(transformStyle);
    this.currentState = newState;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <button type="button" ref={this.buttonRef} className={classes.button}>
          Swipe button
        </button>
      </div>
    );
  }
}

SwipeButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwipeButton);
