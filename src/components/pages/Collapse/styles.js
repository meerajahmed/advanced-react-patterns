const styles = theme => ({
  ...theme.mixins.stage,
  svg: {
    width: 100,
    height: 50
  },
  polygon: {
    fill: '#fff',
    stroke: 'rgba(0, 0, 0, 0.12)',
    strokeWidth: 1
  }
});

export default styles;
