import React from 'react'
import clsx from 'clsx'
import {
  Container,
  Link,
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
  description__content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  description__title: {
    fontWeight: 'bold',
    marginBottom: '2.4rem',
  },
  description__copy: {
    fontWeight: 'bold',
    margin: '0 auto',
    marginBottom: '2.4rem'
  },
  colaborating__cta: {
    alignItems: ' center',
    border: '2px solid #4EA0A8',
    borderRadius: '3rem',
    color: '#4EA0A8',
    display: 'flex',
    fontSize: '1.8rem',
    height: '5.4rem',
    justifyContent: 'center',
    marginTop: '3.2rem',
    overflow: 'hidden',
    padding: '1.5rem',
    textAlign: 'center',
    transition: 'all .2s ease-in-out',
    maxWidth: '25.8rem',
    width: '100%',
    '&:hover': {
      backgroundColor: '#4EA0A8',
      color: 'white',
    },
    '&:hover .colaborating__cta_icon': {
      fill: '#4EA0A8',
    },
  },
}))

const Colaborating = ({
  colaborating }) => {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container
      className={clsx([classes.root, 'root'])}
      component='section'
    >

      <div className={clsx([classes.description__content, 'description__content'])}>
        <Typography
          align='center'
          className={clsx([classes.description__title, 'description__title'])}
          variant={smDown ? 'h3' : 'h2'}
        >
          {colaborating.title}
        </Typography>
        <Typography
          align='center'
          className={clsx([classes.description__copy, 'description__copy'])}
          variant='h5'
          component='p'
        >
          {colaborating.description}
        </Typography>
        <Link
          className={clsx(classes.colaborating__cta)}
          href="mailto:gilsantosjulian@gmail.com"
          underline='none'
        >
          {colaborating.ctaLabel}
        </Link>
      </div>
    </Container>
  )
}

export default Colaborating
