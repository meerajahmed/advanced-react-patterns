import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import Switch from '../../molecules/Switch';
import styles from './styles';

const Home = props => {
  const { classes } = props;
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setOn(!on);
  };
  return (
    <Container>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <Switch on={on} onClick={handleClick} />
        </Paper>
      </Box>
    </Container>
  );
};

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
