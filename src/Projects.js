import React from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Typography
} from "@material-ui/core";
import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import Image from 'next/image'
import { useRef } from "react";
import useAnimate from "./useAnimate";

const useStyles = makeStyles(theme => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
    height: '100%'
  },
  cardActionArea: {
    height: '100%',
    // display: 'grid'
  }
}))

export default function Projects({ projects }) {

  const classes = useStyles()

  const animRef = useRef(null)
  const animate = useAnimate(animRef)

  return (
    <Container>
      <Grid direction="row-reverse" container justify="center" alignItems="center" spacing={10} className={classes.cont}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h2" gutterBottom align="center" innerRef={animRef}>
            Projects
          </Typography>
          <Hidden mdDown>
            <Fade in={animate} style={{ transitionDelay: '250ms' }}>
              <div>
                <Image
                  alt="Projects"
                  src="/projects.svg"
                  width="1144"
                  height="617.32"
                />
              </div>
            </Fade>
          </Hidden>
        </Grid>
        <Grid container item xs={12} lg={6} direction="row" spacing={1}>
          {
            !!projects && projects.map((project, i) =>
              <Grid item sm={6} xs={12} key={i}>
                <Fade in={animate} style={{ transitionDelay: `${200 * i}ms` }}>
                  <Card key={i} className={classes.card}>
                    <CardActionArea
                      className={classes.cardActionArea}
                      href={project.value.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardHeader
                        title={<><RepoIcon verticalAlign='middle' /> {project.value.name}</>}
                        subheader={
                          <>
                            {
                              !!project.value.stargazers_count &&
                              <>
                                <StarIcon verticalAlign='middle' />
                                {project.value.stargazers_count}
                              </>
                            }
                            {
                              !!project.value.forks &&
                              <>
                                <RepoForkedIcon verticalAlign='middle' />
                                {project.value.forks}
                              </>
                            }
                          </>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {project.value.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container direction="row" spacing={1}>
                          {
                            !!project.value.languages &&
                            project.value.languages.map((lang, i) =>
                              <Grid item key={i}>
                                <Chip
                                  key={i}
                                  label={lang}
                                  size="small"
                                />
                              </Grid>
                            )
                          }
                        </Grid>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Fade>
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </Container>
  )
}