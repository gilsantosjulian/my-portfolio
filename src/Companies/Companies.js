import React from 'react'
import {
  CardMedia,
  Container,
  Grid,
  Link,
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
  cont: {
    paddingBottom: theme.spacing(10),
    padding: '14.4rem 2.4rem',
  },
  content__top: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  projects__title: {
    fontWeight: 'bold',
    marginBottom: '2.4rem',
    maxWidth: '61.2rem',
  },
  projects__grid: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '6.4rem 0',
  },
  projects__card: {
    borderRadius: '1.5rem',
    width: '32%',
  },
  project__description: {
    color: 'white',
    fontSize: '2.4rem',
    marginBottom: '1.8rem',
  },
  project__cta: {
    alignItems: ' center',
    border: '1px solid white',
    borderRadius: '3rem',
    color: 'white',
    display: 'flex',
    fontSize: '1.8rem',
    height: '4.5rem',
    padding: '1.5rem',
    '&:hover': {
      backgroundColor: 'white',
      color: '#4EA0A8',
    },
    '&:hover .project__cta_icon': {
      fill: '#4EA0A8',
    },
  },
}))

const CompanieCard = ({
  organization,
  role,
  type,
  startDate,
  endDate,
  city,
  projectDescription,
  state,
  country,
  url,
  thumbnail
}, i) => {
  const classes = useStyles()

  return (
    <div className='projects__card'>
      <div className='projects__figure'>
        <CardMedia
          className='projects__image'
          component="img"
          height="280"
          image={thumbnail}
          alt="green iguana"
        />
        {/* TODO: apply in a good way the colors */}
        <div className="projects__overlay"></div>
        <div className="projects__content-wrapper">
          <div className="projects__content">
            <Typography
              align='center'
              className={clsx(classes.project__description)}
              variant='h1'
            >
              {projectDescription}
            </Typography>
            <Link
              className={clsx(classes.project__cta)}
              href="mailto:gilsantosjulian@gmail.com"
              underline='none'
            > Visit website
              <ChevronRight className={clsx([classes.project__cta_icon, 'project__cta_icon'])} fontSize='large' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Companies = ({ projects }) => {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container component='section' style={{ borderTop: '1px solid #E6ECF8' }}>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={clsx([classes.cont])}
      >
        <div className={clsx([classes.content__top])}>
          <Typography
            align='center'
            className={clsx([classes.projects__title])}
            variant={smDown ? 'h3' : 'h2'}
          >
            I'm proud to have collaborated with some awesome companies:
          </Typography>
        </div>

        <div className={clsx([classes.projects__grid])}>
          {
            experiences.map((experience => <CompanieCard {...experience} />))
          }
        </div>
      </Grid>
    </Container>
  )
}

export default Companies
