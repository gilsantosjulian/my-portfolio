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
import Image from 'next/image'
import { ChevronRight } from '@mui/icons-material';
import clsx from 'clsx'
import data from '../../data.json'
const { companies } = data

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
  company__figure: {
    textAlign: 'center'
  },
}))

const CompanieCard = ({
  logo,
  alt,
}, i) => {
  const classes = useStyles()

  return (
    <>
      {logo && (<div className='company__card'>
        <div className={clsx([classes.company__figure])}>
          <Image
            src={logo}
            alt={alt}
            width='120'
            height='120'
          />
        </div>
      </div>)}
    </>

  )
}

const Companies = ({ companies }) => {
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
            {companies.title}
          </Typography>
        </div>

        <div className={clsx([classes.companies__grid])}>
          {
            companies.companies.map((company => <CompanieCard {...company} />))
          }
        </div>
      </Grid>
    </Container>
  )
}

export default Companies
