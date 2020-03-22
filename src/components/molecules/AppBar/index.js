import React from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import MuiAppBar from '@material-ui/core/AppBar';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './useStyles';

const Index = () => {
  const classes = useStyles();
  return (
    <MuiAppBar position="static">
      <Container>
        <Toolbar>
          <div className={classes.grow} />
          <Button color="inherit" component={RouterLink} to={process.env.ROUTE_HOME}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to={process.env.ROUTE_ABOUT}>
            About
          </Button>
          <Button color="inherit" component={RouterLink} to={process.env.ROUTE_DEV}>
            Dev
          </Button>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default Index;
