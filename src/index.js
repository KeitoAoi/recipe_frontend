import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
);
