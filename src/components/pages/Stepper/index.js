import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Stepper from './Stepper';
import Step from './Step';
import StepLabel from './StepLabel';
import StepContent from './StepContent';

const Usage = props => {
  const { classes } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Box my={8}>
        <Typography variant="h4" align="center">
          Stepper
        </Typography>
        <Typography variant="body2" align="center">
          Steppers convey progress through numbered steps. It provides a wizard-like workflow.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" my={8}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>Label 1</StepLabel>
              <StepContent>
                <div>Content 1</div>
                <button type="button" disabled={activeStep === 0} onClick={handleBack}>
                  Previous
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Label 2</StepLabel>
              <StepContent>
                <div>Content 2</div>
                <button type="button" onClick={handleBack}>
                  Previous
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Label 3</StepLabel>
              <StepContent>
                <div>Content 3</div>
                <button type="button" onClick={handleBack}>
                  Previous
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Label 4</StepLabel>
              <StepContent>
                <div>Content 4</div>
                <button type="button" onClick={handleBack}>
                  Previous
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </StepContent>
            </Step>
          </Stepper>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
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
