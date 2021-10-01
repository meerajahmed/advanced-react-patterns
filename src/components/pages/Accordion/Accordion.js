/* eslint-disable react/prop-types */
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import AccordionContext from './AccordionContext';
import useControlled from '../Hooks/useControlled';

const Accordion = forwardRef(function Accordion(props, ref) {
  const {
    className,
    children: childrenProp,
    defaultExpanded,
    expanded: expandedProp,
    onChange,
    transitionProps,
    ...other
  } = props;

  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    defaultValue: Boolean(defaultExpanded)
  });

  const handleChange = useCallback(
    event => {
      setExpandedState(!expanded);

      if (onChange) {
        onChange(event, !expanded);
      }
    },
    [expanded, onChange, setExpandedState]
  );

  const [summary, ...children] = React.Children.toArray(childrenProp);

  const contextValue = useMemo(() => ({ expanded, toggle: handleChange }), [
    expanded,
    handleChange
  ]);

  const [collapsedHeight, setCollapsedHeight] = useState(null);
  const [style, setStyle] = useState({});
  const wrapperRef = React.useRef(null);

  const getWrapperSize = () => (wrapperRef.current ? wrapperRef.current.clientHeight : 0);

  const handleEnter = node => {
    setCollapsedHeight(node.clientHeight);
  };

  const resetCollapsedHeight = () => {
    setCollapsedHeight(0);
  };

  return (
    <div className={clsx('accordion', expanded, className)} ref={ref} {...other}>
      <AccordionContext.Provider value={contextValue}>{summary}</AccordionContext.Provider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}

      <CSSTransition
        in={expanded}
        onEnter={handleEnter}
        onExit={resetCollapsedHeight}
        timeout={1000}
        {...transitionProps}
      >
        <div
          className={clsx('accordion__details', { expanded })}
          aria-labelledby={summary.props.id}
          id={summary.props['aria-controls']}
          role="region"
          style={style}
        >
          <div className="accordion__details-wrapper" ref={wrapperRef}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
});

export default Accordion;
