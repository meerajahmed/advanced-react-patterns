/* eslint-disable react/prop-types */
import React, { forwardRef, useContext } from 'react';
import clsx from 'clsx';
import AccordionContext from '../AccordionContext';

const AccordionSummary = forwardRef(function AccordionSummary(props, ref) {
  const { children, className, onClick, ...other } = props;

  const { expanded, toggle } = useContext(AccordionContext);

  const handleChange = event => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={clsx('accordion__summary', { expanded })}
      aria-expanded={expanded}
      onClick={handleChange}
      ref={ref}
      {...other}
    >
      <div className={clsx('accordion__summary-content', { expanded })}>{children}</div>
    </div>
  );
});

export default AccordionSummary;
