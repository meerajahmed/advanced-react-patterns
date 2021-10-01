const Radio = React.forwardRef(function Radio(props, ref) {
  const {
    checked: checkedProp,
    classes,
    color = 'secondary',
    name: nameProp,
    onChange: onChangeProp,
    size = 'medium',
    ...other
  } = props;
  const radioGroup = useRadioGroup();

  let checked = checkedProp;
  const onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
  let name = nameProp;

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value;
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  return (
    <SwitchBase
      color={color}
      type="radio"
      icon={React.cloneElement(defaultIcon, { fontSize: size === 'small' ? 'small' : 'default' })}
      checkedIcon={React.cloneElement(defaultCheckedIcon, {
        fontSize: size === 'small' ? 'small' : 'default',
      })}
      classes={{
        root: clsx(classes.root, classes[`color${capitalize(color)}`]),
        checked: classes.checked,
        disabled: classes.disabled,
      }}
      name={name}
      checked={checked}
      onChange={onChange}
      ref={ref}
      {...other}
    />
  );
});
