import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import styles from './styles';

const Usage = props => {
  const { classes } = props;
  const [checked, setChecked] = React.useState(false);
  const handleChange = event => {
    setChecked(event.target.checked);
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
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <Collapse in={checked}>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Collapse>
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
