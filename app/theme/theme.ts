// app/theme/theme.ts
import { createTheme } from '@mui/material/styles';
import { grey, indigo, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500], // Main color
      light: indigo[300],
      dark: indigo[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: pink[500],
      light: pink[300],
      dark: pink[700],
      contrastText: '#ffffff',
    },
    background: {
      default: grey[100],
      paper: '#ffffff',
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: grey[800],
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: grey[600],
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          borderRadius: 6, // Extra-rounded buttons
          marginBottom: '1rem',
          padding: '6px 16px',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
          },
        },
        containedPrimary: {
          backgroundColor: indigo[500],
          color: '#ffffff',
          '&:hover': {
            backgroundColor: indigo[600],
          },
        },
        outlinedPrimary: {
          borderColor: indigo[500],
          color: indigo[500],
          '&:hover': {
            borderColor: indigo[600],
            backgroundColor: indigo[50],
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '16px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: indigo[500],
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%', // Make TextField full width
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            marginBottom: '1rem', // Add padding to TextField
            '& fieldset': {
              borderColor: grey[300],
            },
            '&:hover fieldset': {
              borderColor: indigo[500],
            },
            '&.Mui-focused fieldset': {
              borderColor: indigo[500],
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginButton: '1rem', // Add padding to Input components
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: '12rem',
        },
      },
    },
  },
});

export default theme;
