import { createTheme } from '@mui/material/styles';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3E2723', // Deep Brown (15%)
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B5E3C', // Medium Brown (10%)
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5EDE0', // Light Beige (55%)
      paper: '#FFFFFF',   // White (10%)
    },
    success: {
      main: '#2E5339',    // Nature Green (5%)
    },
    warning: {
      main: '#D4A574',    // Highlight/Gold (5%)
    },
    text: {
      primary: '#3E2723',
      secondary: '#8B5E3C',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme;
