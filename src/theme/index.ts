import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  direction: "rtl",
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Heebo',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#265FB1',
      light: '#D5E6FF',
    },
    secondary: {
      main: '#FFB462'
    },
    error: {
      main: '#F97575'
    }
  },
  overrides: {
    MuiFormControl: {
      root: {
        margin: '.5rem 0'
      }
    },
    MuiButton: {
      label: {
        fontSize: '1.8rem',
        fontWeight: 'normal',
        color: '#265FB1'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '1.8rem'
      }
    },
    MuiInputBase: {
      root: {
        fontSize: '1.8rem'
      }
    }
  }
});