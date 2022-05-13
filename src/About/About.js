import React from 'react'
import {
  Box,
  Container,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  SvgIcon,
} from '@material-ui/core';
import data from '../../data.json'
import clsx from 'clsx';
import * as Icons from '@mui/icons-material';

const { about } = data

const useStyles = makeStyles(theme => {
  console.log({
    aux: theme.breakpoints.down('sm')
  });
  return ({
    root: {
      backgroundColor: theme.palette.type === 'dark' ? 'white' : '#4EA0A8',
      maxWidth: '100%',
    },
    description__title: {
      marginBottom: '2.4rem',
    },
    skill__container: {
      backgroundColor: 'white',
      borderRadius: '1.2rem',
      display: 'flex',
      width: '100%',
      height: '100%',
      padding: 0,
      '& > :last-child': {
        border: 0,
      },
    },
    skill__title: {
      color: '#141c3a',
      fontSize: '2.4rem',
      margin: '2.4rem 0',
    },
    skill__description: {
      fontSize: '1.8rem',
      marginBottom: '3.6rem',
    },
    stack__title: {
      color: '#4EA0A8',
      fontSize: '1.8rem',
      marginBottom: '0.8rem',
    },
    descriptionContainer: {
      color: theme.palette.type !== 'dark' ? 'white' : '#212121',
    },
  })
})

export const About = () => {
  const classes = useStyles()
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container
        className={clsx([classes.root, 'root'])}
        component='section'
      >
        <div
          className={clsx([classes.descriptionContainer, 'description__container'])}
        >
          <div className='description__content'>
            <Typography
              align='center'
              className={clsx([classes.description__title, 'description__title'])}
              variant={smDown ? 'h3' : 'h2'}
            >
              {about.title}
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
              {about.description}
            </Typography>
          </div>
        </div>
      </Container>
      <Container
        className={''}
        component='section'
        style={{
          marginTop: '-20rem',
          height: 'auto',
          maxWidth: '1200px',
        }}
      >
        <Container
          className={clsx(
            classes.skill__container,
            smDown && 'skill__container--column',
          )}
        >
          {
            about.mainSkills.map(({ alt, description, icon, link, stack, stackTitle, title }, i) =>
              <Box
                className='skill'
              >
                <SvgIcon component={Icons[icon]} className='skill__icon' />
                <Typography
                  align='center'
                  variant='h3'
                  className={clsx([classes.skill__title, 'skill__title'])}
                >
                  {title}
                </Typography>
                <Typography
                  align='center'
                  variant='p'
                  className={clsx([classes.skill__description, 'skill__description'])}
                >
                  {description}
                </Typography>
                <Typography
                  align='center'
                  variant='h3'
                  className={clsx([classes.stack__title, 'stack__title'])}
                >
                  {stackTitle}
                </Typography>
                <Typography
                  align='center'
                  variant='p'
                  className={clsx([classes.stack__description, 'stack__description'])}
                >
                  {description}
                </Typography>
              </Box>
            )
          }

        </Container>
      </Container>

    </>
  )
}

export default About
