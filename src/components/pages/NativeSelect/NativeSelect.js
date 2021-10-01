/* eslint-disable react/prop-types */
import React, { forwardRef, useCallback } from 'react';
import clsx from 'clsx';
import useControlled from '../Hooks/useControlled';

const ArrowDropDownIcon = props => <i {...props}>V</i>;

// native select which can be used in a controlled and uncontrolled way
const NativeSelect = forwardRef(function NativeSelect(props, ref) {
  const {
    className,
    children,
    value: valueProp,
    defaultValue,
    onChange,
    disabled,
    IconComponent = ArrowDropDownIcon,
    variant,
    ...other
  } = props;

  const [value, setValue] = useControlled({
    controlled: valueProp,
    defaultValue
  });

  const handleChange = useCallback(
    event => {
      setValue(event.target.value);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange, setValue]
  );

  return (
    <div className={clsx('native-select__wrapper', { disabled }, className)}>
      <select
        className={clsx('native-select', variant)}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        ref={ref}
        {...other}
      >
        {children}
      </select>
      <IconComponent
        className={clsx('native-select__icon', {
          disabled
        })}
      />
    </div>
  );
});

export default NativeSelect;
