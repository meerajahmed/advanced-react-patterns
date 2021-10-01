/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';

const AccordionDetails = React.forwardRef(function AccordionDetails(props, ref) {
  const { classes, className, ...other } = props;

  return <div className={clsx('accordion__details-content', className)} ref={ref} {...other} />;
});

export default AccordionDetails;
