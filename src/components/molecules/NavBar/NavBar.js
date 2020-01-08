import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './NavBar.style';

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography className={classes.grow} variant="h6">
            Starter Kit
          </Typography>
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
    </AppBar>
  );
};

export default NavBar;
