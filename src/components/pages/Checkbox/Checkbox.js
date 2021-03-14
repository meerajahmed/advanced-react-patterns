/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

const Checkbox = forwardRef(function Checkbox(props) {
  const { checked } = props;
  return (
    <span className="checkbox">
      <input type="checkbox" className="checkbox__native-control" checked={checked} />
      <span className="checkbox__background" />
    </span>
  );
});

export default Checkbox;
