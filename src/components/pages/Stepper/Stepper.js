/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import StepperContext from './StepperContext';

const Stepper = forwardRef(function Stepper(props, ref) {
  const { activeStep = 0, className, children, ...other } = props;

  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((step, index) => {
    return React.cloneElement(step, {
      index,
      last: index + 1 === childrenArray.length,
      ...step.props
    });
  });

  const contextValue = React.useMemo(() => ({ activeStep }), [activeStep]);

  return (
    <StepperContext.Provider value={contextValue}>
      <div className={clsx('stepper', className)} ref={ref} {...other}>
        {steps}
      </div>
    </StepperContext.Provider>
  );
});

export default Stepper;
