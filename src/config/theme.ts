import { createTheme } from "@mui/material";
import { amber, blue, deepOrange, green, indigo, orange, pink, purple, teal } from '@mui/material/colors'

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    mode: 'dark',
  },
})

export const orangeTheme = createTheme({
  palette: {
    primary: {
      main: deepOrange[900],
    },
    mode: 'dark',
  },
})

export const pinkTheme = createTheme({
  palette: {
    primary: {
      main: pink[800],
    },
    mode: 'dark',
  },
})

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: teal[700],
    },
    mode: 'dark',
  },
})

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    mode: 'dark',
  },
})