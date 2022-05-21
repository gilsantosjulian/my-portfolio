import { createMuiTheme } from '@material-ui/core';

import data from '../data.json';

const { theme } = data;

export const primaryTheme = createMuiTheme(
  theme && theme.primary && Object.keys(theme.primary).length > 0
    ? theme.primary
    : {
      palette: {
        type: 'primary',
      },
    },
);

export const lightTheme = createMuiTheme(
  theme && theme.light && Object.keys(theme.light).length > 0
    ? theme.light
    : {
      palette: {
        type: 'light',
      },
    },
);

export const darkTheme = createMuiTheme(
  theme && theme.dark && Object.keys(theme.dark).length > 0
    ? theme.dark
    : {
      palette: {
        type: 'dark',
      },
    },
);
