/* eslint-disable react/prop-types */
import * as React from 'react';
import clsx from 'clsx';
import StepperContext from '../StepperContext';
import StepContext from './StepContext';

const StepConnector = () => {
  return (
    <span className="step-connector">
      <span className="step-connector__line" />
    </span>
  );
};

const Step = React.forwardRef(function Step(props, ref) {
  const {
    active: activeProp,
    children,
    className,
    completed: completedProp,
    disabled: disabledProp,
    index,
    last,
    ...other
  } = props;

  const { activeStep } = React.useContext(StepperContext);

  let [active = false, completed = false, disabled = false] = [
    activeProp,
    completedProp,
    disabledProp
  ];

  if (activeStep === index) {
    active = activeProp !== undefined ? activeProp : true;
  } else if (activeStep > index) {
    completed = completedProp !== undefined ? completedProp : true;
  } else if (activeStep < index) {
    disabled = disabledProp !== undefined ? disabledProp : true;
  }

  const contextValue = React.useMemo(
    () => ({ index, last, icon: index + 1, active, completed, disabled }),
    [index, last, active, completed, disabled]
  );

  return (
    <StepContext.Provider value={contextValue}>
      <div className={clsx('step', { completed }, className)} ref={ref} {...other}>
        {index !== 0 ? <StepConnector /> : null}
        {children}
      </div>
    </StepContext.Provider>
  );
});

export default Step;
