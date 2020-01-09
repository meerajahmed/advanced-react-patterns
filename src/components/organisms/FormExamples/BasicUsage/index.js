import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';

const BasicUsage = () => {
  const { handleSubmit, register } = useForm();
  const classes = useStyles();
  // eslint-disable-next-line no-console
  const onSubmit = data => console.log(data);

  return (
    <Container component="main" maxWidth="xs">
      <Box my={8}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Label</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                name="label"
                inputRef={register}
              />
              <FormHelperText id="my-helper-text">Helper text here</FormHelperText>
            </FormControl>
            <Box mt={4}>
              <Button type="submit" variant="outlined" color="primary" fullWidth>
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default BasicUsage;
