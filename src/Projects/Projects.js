import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  cont: {
    paddingBottom: theme.spacing(10),
    padding: '14.4rem 2.4rem',
  },
}))

const Projects = ({ projects }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container component='section'>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={clsx([classes.cont])}
      >
        <Grid item xs={12} lg={6}>
          <Typography variant={mdDown ? 'h2' : 'h1'}>
            My Recent Work
          </Typography>
          <Typography
            variant={mdDown ? 'h5' : 'h4'}
            component='h2'
            className={classes.subtitle}
          >
            Here are a few design projects I've worked on recently. Want to see more? Email me.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Projects
