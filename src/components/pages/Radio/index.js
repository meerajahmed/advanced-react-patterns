import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Radio from './Radio';
import FormControlLabel from './FormControlLabel';

const Usage = props => {
  const { classes } = props;

  return (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center">
          Radio
        </Typography>
        <Typography variant="body2" align="center">
          base component
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <FormControlLabel disabled control={<Radio name="radio" />} label="Radio 1" />
          <FormControlLabel control={<Radio name="radio" />} label="Radio 2" />
          <FormControlLabel control={<Radio name="radio" />} label="Radio 3" />
        </Paper>
      </Box>
    </Container>
  );
};

Usage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Usage);
