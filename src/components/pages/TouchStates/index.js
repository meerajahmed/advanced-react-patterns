import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const TouchStates = props => {
  const { classes } = props;
  return (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center" paragraph>
          Add Touch to Your Site
        </Typography>
        <Typography variant="body2" align="center">
          Respond to element states
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <button className={classes.button} type="button">
            Button
          </button>
        </Paper>
      </Box>
    </Container>
  );
};

TouchStates.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TouchStates);
