/* eslint-disable no-console */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styles from './styles';

const Child = () => {
  console.log('%c  Child: render start', 'color: MediumSpringGreen');

  const [count, setCount] = useState(() => {
    console.log('%c  Child: useState callback', 'color: tomato');
    return 0;
  });

  useEffect(() => {
    console.log('%c        Child: useEffect NO deps', 'color: LightCoral');
    return () => {
      console.log('%c        Child: useEffect NO deps cleanup', 'color: LightCoral');
    };
  });

  useEffect(() => {
    console.log('%c        Child: useEffect EMPTY deps', 'color: MediumTurquoise');
    return () => {
      console.log('%c        Child: useEffect EMPTY deps cleanup', 'color: MediumTurquoise');
    };
  }, []);

  useEffect(() => {
    console.log('%c        Child: useEffect WITH deps', 'color: HotPink');
    return () => {
      console.log('%c        Child: useEffect WITH deps cleanup', 'color: HotPink');
    };
  }, [count]);

  useLayoutEffect(() => {
    console.log('%c    Child: useLayoutEffect NO deps', 'color: LightCoral');
    return () => {
      console.log('%c    Child: useLayoutEffect NO deps cleanup', 'color: LightCoral');
    };
  });

  useLayoutEffect(() => {
    console.log('%c    Child: useLayoutEffect EMPTY deps', 'color: MediumTurquoise');
    return () => {
      console.log('%c    Child: useLayoutEffect EMPTY deps cleanup', 'color: MediumTurquoise');
    };
  }, []);

  useLayoutEffect(() => {
    console.log('%c    Child: useLayoutEffect WITH deps', 'color: HotPink');
    return () => {
      console.log('%c    Child: useLayoutEffect WITH deps cleanup', 'color: HotPink');
    };
  }, [count]);

  const element = (
    <Fab color="secondary" aria-label="count" onClick={() => setCount(prevCount => prevCount + 1)}>
      {count}
    </Fab>
  );

  console.log('%c  Child: render end', 'color: MediumSpringGreen');

  return element;
};

const Main = props => {
  const { classes } = props;

  console.log('%cMain: render start', 'color: MediumSpringGreen');

  const [showChild, setShowChild] = useState(() => {
    console.log('%cMain: useState callback', 'color: tomato');
    return false;
  });

  useEffect(() => {
    console.log('%cMain: useEffect NO deps', 'color: LightCoral');
    return () => {
      console.log('%cMain: useEffect NO deps cleanup', 'color: LightCoral');
    };
  });

  useEffect(() => {
    console.log('%cMain: useEffect EMPTY deps', 'color: MediumTurquoise');
    return () => {
      console.log('%cMain: useEffect EMPTY deps cleanup', 'color: MediumTurquoise');
    };
  }, []);

  useEffect(() => {
    console.log('%cMain: useEffect WITH deps', 'color: HotPink');
    return () => {
      console.log('%cMain: useEffect WITH deps cleanup', 'color: HotPink');
    };
  }, [showChild]);

  useLayoutEffect(() => {
    console.log('%cMain: useLayoutEffect NO deps', 'color: LightCoral');
    return () => {
      console.log('%cMain: useLayoutEffect NO deps cleanup', 'color: LightCoral');
    };
  });

  useLayoutEffect(() => {
    console.log('%cMain: useLayoutEffect EMPTY deps', 'color: MediumTurquoise');
    return () => {
      console.log('%cMain: useLayoutEffect EMPTY deps cleanup', 'color: MediumTurquoise');
    };
  }, []);

  useLayoutEffect(() => {
    console.log('%cMain: useLayoutEffect WITH deps', 'color: HotPink');
    return () => {
      console.log('%cMain: useLayoutEffect WITH deps cleanup', 'color: HotPink');
    };
  }, [showChild]);

  const element = (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center">
          Hook&#39;s life cycle
        </Typography>
        <Typography variant="body2" align="center">
          see console log
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showChild}
                onChange={e => setShowChild(e.target.checked)}
                name="jason"
              />
            }
            label="Show child"
          />
          <div>{showChild ? <Child /> : null}</div>
        </Paper>
      </Box>
    </Container>
  );

  console.log('%cMain: render end', 'color: MediumSpringGreen');

  return element;
};

Main.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
