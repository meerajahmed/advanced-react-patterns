/* eslint-disable react/prop-types */
import * as React from 'react';
import clsx from 'clsx';

const StepIcon = React.forwardRef(function StepLabel(props, ref) {
  const { icon, active, completed, className: classNameProps } = props;

  const className = clsx('step-label__icon', {
    active,
    completed,
    classNameProps
  });
  // default state disabled

  if (completed) {
    return (
      <svg className={className} ref={ref} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="12" />
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <text className="step-label__icon-text" x="12" y="16" textAnchor="middle">
          √
        </text>
      </svg>
    );
  }

  // active or disabled
  // TODO: use SvgIcon component
  return (
    <svg className={className} ref={ref} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" />
      <text className="step-label__icon-text" x="12" y="16" textAnchor="middle">
        {icon}
      </text>
    </svg>
  );
});

export default StepIcon;
