import { createTheme } from "@mui/material";
import { blue, green, pink, purple, yellow } from '@mui/material/colors'

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    mode: 'dark',
  },
})

export const yellowTheme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
    },
    mode: 'dark',
  },
})

export const pinkTheme = createTheme({
  palette: {
    primary: {
      main: pink[700],
    },
    mode: 'dark',
  },
})

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    mode: 'dark',
  },
})

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: purple[600],
    },
    mode: 'dark',
  },
})