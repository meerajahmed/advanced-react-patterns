import { useRef, useState, useCallback } from 'react';
import isUndefined from '../../../utils/isUndefined';

function useControlled(props) {
  const { controlled, defaultValue } = props;
  const { current: isControlled } = useRef(!isUndefined(controlled));
  const [valueState, setValue] = useState(defaultValue);
  const value = isControlled ? controlled : valueState;
  const setStateIfUncontrolled = useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);

  return [value, setStateIfUncontrolled];
}

export default useControlled;
