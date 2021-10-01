/* eslint-disable react/prop-types */
import * as React from 'react';
import clsx from 'clsx';
import StepContext from '../Step/StepContext';

const StepContent = React.forwardRef(function StepContent(props, ref) {
  const { children, className, ...other } = props;

  const { active, last } = React.useContext(StepContext);

  return (
    <div className={clsx('step-content', { last }, className)} ref={ref} {...other}>
      {active ? children : null}
    </div>
  );
});

export default StepContent;
