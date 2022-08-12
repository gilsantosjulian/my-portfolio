import React from 'react'
import clsx from 'clsx';

import {
  Box,
  Container,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  SvgIcon,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.type === 'dark' ? 'white' : '#4EA0A8',
    maxWidth: '100%',
    padding: 0,
  },
  description__title: {
    fontWeight: 'bold',
    marginBottom: '2.4rem',
  },
  description__copy: {
    fontWeight: 'bold',
    margin: '0 auto',
  },
  description__container: {
    color: theme.palette.type !== 'dark' ? 'white' : '#212121',
  },
}))

const StartupProjects = () => {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container
      className={clsx([classes.root, 'root'])}
      component='section'
    >
      <div
        className={clsx([classes.description__container, 'description__container'])}
      >
        <div className='description__content'>
          <Typography
            align='center'
            className={clsx([classes.description__title, 'description__title'])}
            variant={smDown ? 'h3' : 'h2'}
          >
            title
          </Typography>
          <Typography
            align='center'
            className={clsx([classes.description__copy, 'description__copy'])}
            variant='h5'
            component='p'
            style={{
              margin: '0 auto',
              fontWeight: 'bold',
            }}
          >
            description
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default StartupProjects