import React from 'react'
import clsx from 'clsx'
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"

import data from '../../data.json'
const { about } = data

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: '1px solid #E6ECF8',
    maxWidth: '100%',
    padding: '14.4rem 2.4rem',
  },
  description__title: {
    fontWeight: 'bold',
    marginBottom: '2.4rem',
  },
  description__copy: {
    fontWeight: 'bold',
    margin: '0 auto',
  },
}))

const Colaborating = () => {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container
      className={clsx([classes.root, 'root'])}
      component='section'
    >
      <div
        className={clsx([''])}
      >
        <div className='description__content'>
          <Typography
            align='center'
            className={clsx([classes.description__title, 'description__title'])}
            variant={smDown ? 'h3' : 'h2'}
          >
            Interested in collaborating or investing?
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
            I’m always open to discussing product design work or partnership opportunities.
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default Colaborating
