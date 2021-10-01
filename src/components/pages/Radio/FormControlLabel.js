/* eslint-disable react/prop-types */
import React, { cloneElement, forwardRef } from 'react';
import clsx from 'clsx';
import { isUndefined } from '../../../utils';

const FormControlLabel = forwardRef(function FormControlLabel(props, ref) {
  const {
    className,
    control: controlProp,
    children,
    label,
    disabled: disabledProp,
    ...other
  } = props;

  const control = controlProp || children;

  let disabled = disabledProp;
  if (isUndefined(disabled) && !isUndefined(typeof control.props.disabled)) {
    disabled = control.props.disabled;
  }

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={clsx('form-control__label', { 'form-control__label--disabled': disabled })}
      ref={ref}
      {...other}
    >
      {cloneElement(control, { disabled })}
      <span className="form-control__label-text">{label}</span>
    </label>
  );
});

export default FormControlLabel;
