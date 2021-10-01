/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import clsx from 'clsx';

const FormLabel = forwardRef(function FormLabel(props, ref) {
  const { children, className, component: Component = 'label', disabled, ...other } = props;

  return (
    <Component className={clsx('form__label', { disabled }, className)} ref={ref} {...other}>
      {children}
    </Component>
  );
});

export default FormLabel;
