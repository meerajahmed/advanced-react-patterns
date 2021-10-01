/* eslint-disable react/prop-types */
import * as React from 'react';
import clsx from 'clsx';
import StepContext from '../Step/StepContext';
import StepIcon from '../StepIcon';
import { isUndefined } from '../../../../utils';

const StepLabel = React.forwardRef(function StepLabel(props, ref) {
  const { children, className, StepIconComponent: StepIconComponentProp, ...other } = props;

  const { icon, active, disabled, completed } = React.useContext(StepContext);

  let StepIconComponent = StepIconComponentProp;

  if (isUndefined(StepIconComponent)) {
    StepIconComponent = StepIcon;
  }

  return (
    <span
      className={clsx('step-label', { disabled, active, completed }, className)}
      ref={ref}
      {...other}
    >
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <span className="step-label__icon-container">
        <StepIconComponent icon={icon} active={active} completed={completed} disabled={disabled} />
      </span>
      <span className="step-label__label-container">{children}</span>
    </span>
  );
});

export default StepLabel;
