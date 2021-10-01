/* eslint-disable react/prop-types */
import React, { useRef, forwardRef } from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

const getTransitionDuration = (timeout, mode) =>
  typeof timeout === 'number' ? timeout : timeout[mode] || 0;

const Collapse = forwardRef(function Collapse(props, ref) {
  const {
    children,
    className,
    component: Component = 'div',
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExiting,
    timeout = 300,
    TransitionComponent = CSSTransition,
    ...other
  } = props;

  const wrapperRef = useRef(null);

  const getWrapperSize = () => (wrapperRef.current ? wrapperRef.current.clientHeight : 0);

  const handleEnter = (node, isAppearing) => {
    if (wrapperRef.current) {
      wrapperRef.current.style.position = 'absolute';
    }
    // eslint-disable-next-line no-param-reassign
    node.style.height = 0;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleEntering = (node, isAppearing) => {
    const wrapperSize = getWrapperSize();
    if (wrapperRef.current) {
      wrapperRef.current.style.position = '';
    }

    const transitionDuration = getTransitionDuration(timeout, 'enter');

    // eslint-disable-next-line no-param-reassign
    node.style.transitionDuration =
      typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;

    // eslint-disable-next-line no-param-reassign
    node.style.height = `${wrapperSize}px`;

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  };

  const handleEntered = (node, isAppearing) => {
    // eslint-disable-next-line no-param-reassign
    node.style.height = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  };

  const handleExit = node => {
    // eslint-disable-next-line no-param-reassign
    node.style.height = `${getWrapperSize()}px`;

    if (onExit) {
      onExit(node);
    }
  };

  const handleExiting = node => {
    const transitionDuration = getTransitionDuration(timeout, 'exit');

    // eslint-disable-next-line no-param-reassign
    node.style.transitionDuration =
      typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;

    // eslint-disable-next-line no-param-reassign
    node.style.height = 0;

    if (onExiting) {
      onExiting(node);
    }
  };

  return (
    <TransitionComponent
      in={inProp}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      timeout={timeout}
      {...other}
    >
      <Component className={clsx('collapse', className)} ref={ref}>
        <div className="collapse__wrapper" ref={wrapperRef}>
          <div className="collapse__wrapper-inner">{children}</div>
        </div>
      </Component>
    </TransitionComponent>
  );
});

export default Collapse;
