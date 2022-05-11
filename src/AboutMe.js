import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import data from '../data.json'
import simpleIcons from 'simple-icons'
import clsx from "clsx";
import Image from 'next/image'
import { iconify } from "./util";
import Cancel from "@material-ui/icons/Cancel";
const { about } = data

const dpx = about.social.length * 10 - 2

const socialDetails = about.social.map(({ alt, icon, link }) => {
  const ic = simpleIcons.get(iconify(icon)) || {
    hex: '424242',
    component: <Cancel color="white" fontSize={36} />
  }
  return {
    alt,
    backgroundColor: '#' + ic.hex,
    icon: ic.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>{icon}</title>
      <path d={ic.path} fill="white" />
    </svg>,
    link
  }
})

let iobj = {}
socialDetails.forEach(({ alt, backgroundColor }) => {
  iobj[alt] = { backgroundColor }
})

const useStyles = makeStyles(theme => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(25)}px)`,
    backgroundColor: '#4EA0A8',
    color: 'white',
  },
  avatar: {
    height: theme.spacing(8),
    width: theme.spacing(8),
    padding: theme.spacing(2)
  },
  dp: {
    height: theme.spacing(Math.max(dpx, 28)),
    width: theme.spacing(Math.max(dpx, 28))
  },
  description: {
    alignSelf: 'center',
    width: '80%',
  },
  descriptionTitle: {
    marginBottom: '24px',
  },
  ...iobj
}))

export default function About() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid
      direction="row"
      container
      justify="center"
      alignItems="center"
      className={classes.cont}
      // TODO: Improve with classnames, and also the colors
      style={{
        color: theme.palette.type !== "dark" ? 'white' : '#212121',
        backgroundColor: theme.palette.type === "dark" ? 'white' : '#4EA0A8'
      }}
    >
      <Container className={classes.description}>
        <Typography
          align='center'
          className={classes.descriptionTitle}
          component="p"
          variant="h2"
          gutterBottom
        >
          {about.title}
        </Typography>
        <Typography align='center' variant="h5" gutterBottom component="p">
          {about.description}
        </Typography>
      </Container>

    </Grid>
  )
}