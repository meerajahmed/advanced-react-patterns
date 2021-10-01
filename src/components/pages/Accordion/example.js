import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Accordion from './Accordion';
import AccordionSummary from './AccordionSummary';
import AccordionDetails from './AccordionDetails';

const Usage = props => {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="product-reason" id="product-summary">
              Summary
            </AccordionSummary>
            <AccordionDetails>
              <p>
                An accordion is a vertically stacked set of interactive headings that each contain a
                title, content snippet, or thumbnail representing a section of content. The headings
                function as controls that enable users to reveal or hide their associated sections
                of content. Accordions are commonly used to reduce the need to scroll when
                presenting multiple sections of content on a single page.
              </p>
              <p>
                Accordion Header: Label for or thumbnail representing a section of content that also
                serves as a control for showing, and in some implementations, hiding the section of
                content. Accordion Panel: Section of content associated with an accordion header. In
                some accordions, there are additional elements that are always visible adjacent to
                the accordion header. For instance, a menubutton may accompany each accordion header
                to provide access to actions that apply to that section. And, in some cases, a
                snippet of the hidden content may also be visually persistent.
              </p>
            </AccordionDetails>
          </Accordion>
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
