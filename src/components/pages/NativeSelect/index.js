import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import NativeSelect from './NativeSelect';
import FormLabel from '../../molecules/FormLabel';

const Usage = props => {
  const { classes } = props;
  const [state, setState] = useState({
    age: 20
  });

  const handleChange = event => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  return (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center">
          Accordion
        </Typography>
        <Typography variant="body2" align="center">
          Accordions contain creation flows and allow lightweight editing of an element.
        </Typography>
        <pre>{JSON.stringify(state)}</pre>
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <FormLabel htmlFor="age-native-helper">Reasons</FormLabel>
          <NativeSelect name="age" id="age-native-helper" value={state.age} onChange={handleChange}>
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
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
