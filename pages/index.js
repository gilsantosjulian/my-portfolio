import React, { useCallback } from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme
} from '@material-ui/core';
import Landing from '../src/Landing';
import Footer from '../src/Footer';
import Skills from '../src/Skills';
import Projects from '../src/Projects/Projects';
import Companies from '../src/Companies/Companies';
import Colaborating from '../src/Colaborating/Colaborating';
import Experience from '../src/Experience';
import About from '../src/About';
import AboutMe from '../src/About/About';
import Cta from '../src/Cta/Cta';
import data from '../data.json';
import { darkTheme, lightTheme, primaryTheme } from '../src/theme';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import Testimonies from '../src/Testimonies/Testimonies';
const { companies, name, projects, colaborating } = data

// import 'bulma/css/bulma.min.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: 'none',
    color: primaryTheme.palette.color,
  }
}))

export default function Index({ projects, setTheme }) {

  const classes = useStyles()
  const trigger = useScrollTrigger({ disableHysteresis: true })
  const theme = useTheme()

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.palette.type === 'dark' ? lightTheme : darkTheme)
  }, [setTheme])

  return (
    <div className={classes.root}>
      <AppBar
        color={!trigger ? 'transparent' : 'inherit'}
        className={classes.appBar}
        position='fixed'
      >
        <Toolbar>
          <Typography variant='h6' className={classes.root}>
            {name}
          </Typography>
          {/* TODO: Add theme icon, I need to redesign all the sections with dark theme */}
          {/* <IconButton edge='end' color='inherit' onClick={toggleTheme}>
            {theme.palette.type === 'dark' ? <Brightness4 /> : <Brightness7 />}
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Landing />
      <AboutMe />
      <Projects projects={projects} />
      <Companies companies={companies} />
      <Colaborating colaborating={colaborating} />
      <Cta />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const baseURI = projects.baseURI
  const repos = projects.repositories
  const reqInit = {
    headers: {
      'Authorization': `token ${process.env.PAT}`
    }
  }
  const fullRepoData = await Promise.allSettled(
    repos.map(
      async name => {
        const repo = await fetch(baseURI + name, reqInit).then(res => res.json());
        const langs = await fetch(baseURI + name + '/languages', reqInit).then(res => res.json())
        return {
          ...repo,
          languages: Object.getOwnPropertyNames(langs)
        };
      }
    )
  );

  return {
    props: {
      projects: fullRepoData
    },
    revalidate: 60
  }
}
