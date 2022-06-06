import React from 'react'
import {
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import { ChevronRight } from '@mui/icons-material';
import clsx from 'clsx'
import data from '../../data.json'
const { experiences, experiencesTitle, experiencesDescription } = data

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: '1px solid #E6ECF8',
    maxWidth: '100%',
    padding: '14.4rem 2.4rem',
  },
  content__top: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  companies__title: {
    fontWeight: 'bold',
    marginBottom: '2.4rem',
    maxWidth: '61.2rem',
  },
  companies__grid: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '4.8rem',
  },
  company__card: {
    borderRadius: '1.5rem',
    width: '32%',
  },
}))

const CompanieCard = ({
  thumbnail
}, i) => {
  const classes = useStyles()

  return (
    <div className='company__card'>
      <div className='company__figure'>
        <CardMedia
          className='company__image'
          component="img"
          height="280"
          image={thumbnail}
          alt="green iguana"
        />
      </div>
    </div>
  )
}

const Companies = ({ projects }) => {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container
      component='section'
      className={clsx([classes.root, 'root'])}
    >
      <Grid
        container
        justify='center'
        alignItems='center'
        className={clsx([classes.cont])}
      >
        <div className={clsx([classes.content__top])}>
          <Typography
            align='center'
            className={clsx([classes.companies__title])}
            variant={smDown ? 'h3' : 'h2'}
          >
            I'm proud to have collaborated with some awesome companies:
          </Typography>
        </div>

        <div className={clsx([classes.companies__grid])}>
          {
            experiences.map((company => <CompanieCard {...company} />))
          }
        </div>
      </Grid>
    </Container>
  )
}

export default Companies
