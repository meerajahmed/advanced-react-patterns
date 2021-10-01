import React, { forwardRef } from 'react';
import clsx from 'clsx';
import useControlled from '../Hooks/useControlled';

// eslint-disable-next-line no-unused-vars
const Radio = forwardRef(function Radio(props, ref) {
  // eslint-disable-next-line react/prop-types
  const { checked: checkedProp, className, defaultChecked, disabled, onChange, ...other } = props;

  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    defaultValue: Boolean(defaultChecked)
  });

  const handleInputChange = event => {
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <span className={clsx('radio', { 'radio--disabled': disabled }, className)}>
      <input
        checked={checked}
        className="radio__native-control"
        disabled={disabled}
        onChange={handleInputChange}
        ref={ref}
        type="radio"
        {...other}
      />
      <span className="radio__background">
        <span className="radio__outer-circle" />
        <span className="radio__inner-circle" />
      </span>
    </span>
  );
});

export default Radio;
