import green from '@material-ui/core/colors/green'
import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    background: {
      default: '#fafafa'
    },
    type: 'light',
    primary: {
      main: '#442B48'
    },
    secondary: green
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})
