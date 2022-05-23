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
import clsx from 'clsx'
import data from '../../data.json'
const { experiences } = data

const useStyles = makeStyles(theme => ({
  cont: {
    paddingBottom: theme.spacing(10),
    padding: '14.4rem 2.4rem',
  },
  content__top: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  projects__title: {
    marginBottom: '2.4rem',
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
  card: {
    height: '100%',
  },
  cardHeader: {
    paddingTop: 0
  },
  cardActionArea: {
    height: '100%',
  },
}))

const ProjectCard = ({
  organization,
  role,
  type,
  startDate,
  endDate,
  city,
  state,
  country,
  url,
  thumbnail
}, i) =>
  <div className='projects__card'>
    <div className='projects__figure'>
      <CardMedia
        className='projects__image'
        component="img"
        height="280"
        image={thumbnail}
        alt="green iguana"
        style={{ borderRadius: '1.5rem', }}
      />
      {/* TODO: apply in a good way the colors */}
      <div className="projects__overlay" style={{ backgroundColor: '#4EA0A8' }}></div>
      <div class="projects__content">
        <div
          class="text"
          style={{ color: 'white' }}
        >John Doe
        </div>
      </div>
    </div>
  </div>

const Projects = ({ projects }) => {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container component='section'>
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
            My Recent Work
          </Typography>
          <Typography
            align='center'
            className='description__copy'
            variant='h5'
            component='p'
            style={{
              margin: '0 auto'
            }}
          >
            Here are a few design projects I've worked on recently. Want to see more?
            <Link
              href="mailto:gilsantosjulian@gmail.com"
              underline='none'
              style={{ color: '#4EA0A8' }}
            > Email me.
            </Link>
          </Typography>
        </div>

        <div className={clsx([classes.projects__grid])}>
          {
            experiences.map((experience => <ProjectCard {...experience} />))
          }
        </div>
      </Grid>
    </Container>
  )
}

export default Projects
