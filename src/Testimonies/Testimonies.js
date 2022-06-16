import React from 'react'
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import clsx from 'clsx'
import data from '../../data.json'

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: '1px solid #E6ECF8',
    maxWidth: '100%',
    padding: '14.4rem 2.4rem',
  },
}))

const Testimonies = ({ companies }) => {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container
      component='section'
      className={clsx([classes.root, 'root'])}
    >
      Testimonies
    </Container>
  )
}

export default Testimonies
