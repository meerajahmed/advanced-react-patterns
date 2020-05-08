const styles = theme => ({
  paper: {
    ...theme.mixins.stage.paper,
    minHeight: 'none',
    justifyContent: 'flex-start',
    padding: theme.spacing(12, 0)
  }
});

export default styles;
