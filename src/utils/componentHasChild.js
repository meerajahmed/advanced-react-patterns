const KNOW_STATICS = {
  length: true,
  prototype: true,
  name: true,
  defaultProps: true,
  propTypes: true
};

const removeKnowStatics = key => !KNOW_STATICS[key];

const componentHasChild = (target, element) =>
  Reflect.ownKeys(target)
    .filter(removeKnowStatics)
    .map(key => Reflect.getOwnPropertyDescriptor(target, key).value)
    .includes(element.type);

export default componentHasChild;
